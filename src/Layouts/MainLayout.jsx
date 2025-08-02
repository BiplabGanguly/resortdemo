import { Outlet } from 'react-router-dom';
import Banner from "../Sections/Home/Banner/Banner";

export const MainLayout = () => (
    <>
        <Banner />
        <Outlet />
    </>
);
