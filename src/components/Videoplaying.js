import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTION } from "../utils/constant";
import { addTrailer } from "../utils/Moviesslice";

function Videoplaying() {
  const movie = useSelector((state) => state?.movie?.NowPlayingMovie);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!movie) return;

    const fetchTrailer = async () => {
      try {
        const data = await fetch(
          `https://api.themoviedb.org/3/movie/${movie[0].id}/videos`,
          API_OPTION
        );
        const json = await data.json();
        dispatch(addTrailer(json?.results));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching trailer:", error);
        setLoading(false);
      }
    };

    fetchTrailer();
  }, [dispatch, movie]);
  const TrailerVideo = useSelector((state) => state?.movie?.Trailer);
  if (!movie) return ;

 
  const trailer =
    TrailerVideo &&
    TrailerVideo.find((video) => video.type === "Trailer");

  if (loading) return <div>Loading...</div>;

  return (
    <div className="   ">
      {trailer ? (
        <iframe
          className=" w-[380px]    md:w-screen  aspect-video bg-gradient-to-r from-black "
          src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      ) : (
        <div>No trailer available</div>
      )}
    </div>
  );
}

export default Videoplaying;
