import React from "react";
import Navbar from "../components/Navbar";
import { Outlet, Link } from "react-router-dom";
import { X } from "lucide-react";
import { useState } from "react";

export default function Dashboard (){
    const [showSidebar, setShowSidebar] = useState(false);

    function displaySideBar(){
        setShowSidebar(true);
    }

    function closeSidebar() {
        setShowSidebar(false);
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
                <aside 
                    className={`${showSidebar ? "grid" : "hidden"} absolute backdrop-blur-sm h-screen w-full z-50 place-items-start`}
                    onClick={closeSidebar}
                >
                    <X color="white" 
                        className="absolute right-0 m-3 cursor-pointer" 
                        onClick={(e) => {
                            e.stopPropagation();  
                            closeSidebar();
                        }} 
                    />
                    <div onClick={(e) => e.stopPropagation()} className="flex flex-col h-screen w-40 bg-black justify-center">
                        <Link to="games/shooter" 
                            className="text-white hover:bg-amber-100 hover:text-black mx-auto py-1 px-2 w-25 rounded-sm"
                            onClick={closeSidebar}
                        >
                            Shooting
                        </Link>
                        <Link to="games/sports" 
                            className="text-white hover:bg-amber-100 hover:text-black mx-auto py-1 px-2 w-25 rounded-sm"
                            onClick={closeSidebar}
                        >
                            Sports
                        </Link>
                        <Link to="games/racing" 
                            className="text-white hover:bg-amber-100 hover:text-black mx-auto py-1 px-2 w-25 rounded-sm"
                            onClick={closeSidebar}
                        >
                            Racing
                        </Link>
                        <Link to="games/action" 
                            className="text-white hover:bg-amber-100 hover:text-black mx-auto py-1 px-2 w-25 rounded-sm"
                            onClick={closeSidebar}
                        >
                            Action
                        </Link>
                        <Link to="games/adventure
                            " className="text-white hover:bg-amber-100 hover:text-black mx-auto py-1 px-2 w-25 rounded-sm"
                            onClick={closeSidebar}
                        >
                            Adventure
                        </Link>
                    </div>   
                </aside>
                <Navbar onToggleSidebar={displaySideBar}/>
                <Outlet />
            </main>
        </>
        
    )
}