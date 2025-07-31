import Banner from "../../Component/Home/Banner";
import Intro from '../../Component/Home/Intro';
import Video from "../../Component/Home/Video";

export default function index() {
  return (
    <div>
      <Banner />
      {/* intro section code  */}
      <Intro /> <br /><br /><br /><br />
      {/* video section  */}
      <Video/>
    </div>
  )
}
