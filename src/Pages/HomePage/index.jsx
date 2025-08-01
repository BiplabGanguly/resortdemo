import Apartment from "../../Component/Home/Apartment";
import Banner from "../../Component/Home/Banner";
import ChooseUS from "../../Component/Home/ChooseUS";
import Dine from "../../Component/Home/Dine";
import Intro from '../../Component/Home/Intro';
import Service from "../../Component/Home/Service";
import Video from "../../Component/Home/Video";

export default function index() {
  return (
    <div>
      <Banner />
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
    </div>
  )
}
