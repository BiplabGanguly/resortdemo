import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from "../Pages/HomePage/index.jsx"
import { MainLayout } from '../Layouts/MainLayout.jsx'
import RoomView from ".././Pages/RoomView/index.jsx"

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route  path='/' element={<MainLayout />}>
                <Route index element={<Home />} />
                 <Route path="/apartment/:id" element={<RoomView />} />
                </Route>
            </Routes>
        </>
    )
}
