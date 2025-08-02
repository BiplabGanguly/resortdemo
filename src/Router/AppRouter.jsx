import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from "../Pages/HomePage/index.jsx"
import { MainLayout } from '../Layouts/MainLayout.jsx'

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route  path='/' element={<MainLayout />}>
                <Route index element={<Home />} />
                 {/* <Route path="*" element={<NotFound />} />   404 not found page  */}
                </Route>
            </Routes>
        </>
    )
}
