
export default function HomePage(){

    return(
        <div className="relative h-screen w-screen overflow-hidden grid place-content-center">
            <video autoPlay loop muted className="absolute w-full h-full object-cover" >
                <source src="/public/assets/ghost-cod.desktop.mp4" type="video/mp4" />
                Your browser doesn't support HTML5 video.
            </video>

            <div className='relative flex flex-col text-white justify-center text-center m-1 rounded-2xl backdrop-blur-2xl p-4'>
                <h1 className="text-5xl font-bold text-amber-400 glow-effect uppercase" >Game Box</h1>
                <p>Gear up for your next mission, Game Box got your back soldier!</p>
                <a href="#" className="bg-amber-200 text-black w-fit mx-auto p-1 rounded-sm mt-1.5">Eplore games</a>
            </div>
        </div>

    );
}