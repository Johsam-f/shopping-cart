
export default function HomePage(){

    return(
        <div className="relative h-screen w-screen overflow-hidden">
            <video autoPlay loop muted className="absolute w-full h-full object-cover" >
                <source src="/public/assets/ghost-cod.desktop.mp4" type="video/mp4" />
                Your browser doesn't support HTML5 video.
            </video>
        </div>
    );
}