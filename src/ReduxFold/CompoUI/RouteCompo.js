import React from "react"
import { BrowserRouter, NavLink ,Routes,Route } from "react-router-dom"
import Home from "../CompoUI/Home"
import Student from "../CompoUI/Student"
import Contact from "../CompoUI/Contact"
import NewStudent from "../CompoUI/NewStudent"
import EditStudent from "../CompoUI/EditStudent"
import { isAction } from "@reduxjs/toolkit"

const RouteCompo = () =>
{
    return(
        <>
            <BrowserRouter>
               <header>
                    <NavLink to="/" className='Nav'>Home </NavLink>
                    <NavLink to="/Student"className='Nav'>Student</NavLink>
                    <NavLink to="/Contact"className='Nav'>ContactUs</NavLink>
               </header>
                {/* <NavLink to="/NewStudent"></NavLink> */}
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/Student" element={<Student/>}></Route>
                    <Route path="/Contact" element={<Contact/>}></Route>
                    <Route path="/NewStudent" element={<NewStudent/>}></Route>
                    <Route path="/EditStudent" element={<EditStudent/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default RouteCompo