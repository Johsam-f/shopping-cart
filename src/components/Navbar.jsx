import React from "react";
import { Link } from "react-router-dom";
import { Menu, ShoppingCart, Search } from "lucide-react";
import { useState } from "react";

export default function Navbar({ onToggleSidebar }){
    const [search, setSearch] = useState("");
    const [games, setGames] = useState([])
 
    async function handlesearch(e) {
        const query = e.target.value;
        setSearch(query);
    
        if (query.length < 3) return; // only search for 3+ letters
    
        try {
            const response = await fetch(`https://api.rawg.io/api/games?key=0b73711396bc4420aaa164136aa648e9&search=${query}`);
            const data = await response.json();
            console.log(data); // handle this data as needed
            setGames(data.results);
            games.forEach(game => {
                console.log("Name:", game.name);
                console.log("Image:", game.background_image);
              });
        } catch (err) {
            console.error("Error fetching search results:", err);
        }
    }

    return(
        <nav className="bg-none w-screen flex px-4 py-3 justify-between z-40">
            <Menu color="white" className="cursor-pointer hover:text-blue-300" onClick={onToggleSidebar}/>
            <div className="relative">
                <input value={search} type="text" placeholder="search for games..." onChange={handlesearch} 
                    className="peer bg-white h-7 self-center rounded-2xl p-3 pr-8 placeholder:italic w-[min(60vw,20rem)]"
                />
                 <div className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500">
                    <Search size={16} />
                </div>
                <div className="hidden peer-focus:block absolute left-0 right-0 bg-gray-800 w-fit max-h-screen overflow-y-auto z-50 mt-2 mx-auto">
                    {games.map( game => {
                        return(
                            <Link to={`/game_details/${game.name}/${game.id}`} key={game.id} className=" p-2 rounded hover:bg-gray-700 flex flex-col items-center">
                                <img src={game.background_image} alt={game.name} className="w-50 h-40 object-cover rounded" />
                                <p className="text-white mt-2">{game.name}</p>
                            </Link>
                        )
                    })}
                </div>
            </div>
            
            <Link to="/Cart" className="z-10">
                <ShoppingCart className="text-white hover:text-blue-300"/>
            </Link>
        </nav>
        
    );
};