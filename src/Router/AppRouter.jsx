import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from "../Pages/HomePage/index.jsx"
import { MainLayout } from '../Layouts/MainLayout.jsx'
import RoomView from ".././Pages/RoomView/index.jsx"
import Booknow from '../Pages/Booking/Booknow.jsx'

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route  path='/' element={<MainLayout />}>
                <Route index element={<Home />} />
                 <Route path="/apartment/:id" element={<RoomView />} />
                 <Route path="/bookroom/:id" element={<Booknow />} />

                </Route>
            </Routes>
        </>
    )
}
