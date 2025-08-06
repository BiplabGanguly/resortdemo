import { Outlet } from 'react-router-dom';
import Banner from "../Sections/Home/Banner/Banner";
import Footer from './Common/Footer';
import Address from "../Sections/Home/Details/Address"
export const MainLayout = () => (
    <>
        <Banner />
        <Outlet />
        <br /><br /><br />
        <Address/>
        <Footer/>
    </>
);
