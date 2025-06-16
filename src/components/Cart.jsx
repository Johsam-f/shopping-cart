import { X, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Cart({ showCartItems, closeCartBar }){

    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);

   return(
        <aside 
            className={`${showCartItems ? "grid" : "hidden"} absolute top-0 backdrop-blur-sm h-full w-full z-50 place-items-start`}
            onClick={closeCartBar}
        >
            <X color="white" 
                className="absolute left-0 m-3 cursor-pointer" 
                onClick={(e) => {
                    e.stopPropagation();  
                    closeCartBar();
                }} 
            />
            <div onClick={(e) => e.stopPropagation()} className="absolute right-0 flex flex-col h-screen w-70 bg-black overflow-y-auto p-4">
                <button className="text-white mb-3 font-bold flex justify-center gap-2 hover:text-blue-400 active:text-blue-400" 
                    onClick={()=> {
                        localStorage.clear()
                        setCart([])
                    }}
                >
                   <Trash2/> clear cart
                </button>
                {cart.length < 1? <p className="text-white mx-auto mt-7 font-bold italic">No games in cart!</p> : 
                    cart.map(game => {
                        return(
                            <Link to={`/game_details/${game.name}/${game.id}`} key={game.id} onClick={closeCartBar}
                                className="flex flex-col items-center gap-2 my-2"
                            >
                                <img
                                    src={game.background_image}
                                    alt={game.name}
                                    className="w-60 md:w-60 object-cover rounded-2xl"
                                />
                                <p className="text-amber-400 font-bold">{game.name}</p>
                            </Link>
                        )
                    })
                }
            </div>   
        </aside>
   )
}