import { Link } from "react-router-dom";

export default function HomePage(){

    return(
        <div className="relative h-screen w-screen overflow-hidden grid place-content-center">

            <img src="/assets/temp_bg.png" alt=""
                className="absolute w-full h-full object-cover z-0"
            />
            <video autoPlay loop muted className="absolute w-full h-full object-cover z-10" >
                <source src="/assets/ghost-cod.desktop.mp4" type="video/mp4" />
                Your browser doesn't support HTML5 video.
            </video>

            <div className='relative flex flex-col text-white justify-center text-center m-1 rounded-2xl backdrop-blur-2xl p-4 z-30'>
                <h1 className="text-5xl text-amber-400 glow-effect uppercase font-extrabold" >Game Box</h1>
                <p className="my-2">Gear up for your next mission, Game Box got your back soldier!</p>
                <Link to="dashboard" 
                    className="bg-amber-200 text-black  w-fit mx-auto p-1 rounded-sm mt-1.5 shadow-xl/20 shadow-amber-50 ring-3 hover:opacity-85 font-bold"
                >
                    Explore games
                </Link>
            </div>
        </div>

    );
}