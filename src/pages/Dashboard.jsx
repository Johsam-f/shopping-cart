import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import SideBar from "../components/SideBar";
import Cart from "../components/Cart";

export default function Dashboard (){
    const [showSidebar, setShowSidebar] = useState(false);
    const [showCartItems, setshowCartItems] = useState(false);

    function displaySideBar(){
        setShowSidebar(true);
    }

    function closeSidebar() {
        setShowSidebar(false);
    }

    function displayCartItems(){
        setshowCartItems(true);
    }

    function closeCartBar(){
        setshowCartItems(false);
    }

    return(
        <>
            <img src="/assets/temp_bg.png" alt=""
                className="absolute w-full h-full object-cover z-0"
            />
            <video autoPlay loop muted className="absolute w-full h-full object-cover z-10" >
                <source src="/assets/ghost-cod.desktop.mp4" type="video/mp4" />
                Your browser doesn't support HTML5 video.
            </video>
            <main className="relative w-screen h-screen overflow-hidden z-20">
                <Cart showCartItems={showCartItems} closeCartBar={closeCartBar} />
                <SideBar showSidebar={showSidebar} closeSidebar={closeSidebar} />
                <Navbar onToggleSidebar={displaySideBar} onToggleCart={displayCartItems}/>
                <Outlet />
            </main>
        </>
        
    )
}