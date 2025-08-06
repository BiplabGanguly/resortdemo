import Apartment from "../../Sections/Home/Apartment/Apartment";
import ChooseUS from "../../Sections/Home/ChooseUs/ChooseUS";
// import Address from "../../Sections/Home/Details/Address";
import Dine from "../../Sections/Home/Dine/Dine";
import Intro from '../../Sections/Home/Intro/Intro';
import Service from "../../Sections/Home/Service/Service";
import Video from "../../Sections/Home/Video/Video";
import "../../Sections/Home/home.style.css"
import Testmonial from "../../Sections/Testmonial/Testmonial";

export default function index() {
  return (
    <div>
      {/* intro section code  */}
      <Intro /> 
      <br />
      <br />
      <br />
      <br />
      {/* video section  */}
      <Video />
      {/* choose your appartment code */}
      <Apartment />
      <br /><br /><br />
      {/* dine code  */}
      <Dine /><br /><br />

      {/* why choose use  */}
      <ChooseUS/>

       {/* service section  */}
       <Service/>
       {/* testmonial section code  */}
       <Testmonial/><br /><br /><br />
       {/* < Address and Map section > */}
       {/* <Address/> */}
    </div>
  )
}
