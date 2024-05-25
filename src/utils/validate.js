
const Validateform=(email,password)=>{
const isemailvalid=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
const ispasswordvalid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
if(!isemailvalid) return "Email Id is not valid";
if(!ispasswordvalid) return "password is Not valid";
}
export default Validateform;