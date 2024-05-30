import React from 'react'

function Searchbox() {
  return (
    <div>
        <form className=''>
            <input type='text' className=' border p-4 w-96 mr-3 rounded-lg capitalize' placeholder='search movies according to your wish?'/>
            <button className=' border p-4 rounded-lg bg-red-700 w-36'>search</button>
        </form>
    </div>
  )
}

export default Searchbox