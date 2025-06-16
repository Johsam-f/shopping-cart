import { X } from "lucide-react";
import { Link } from "react-router-dom";

export default function SideBar({ showSidebar, closeSidebar }){
    return(
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
    )
}