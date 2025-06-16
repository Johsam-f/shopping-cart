import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, ShoppingCart, Search } from "lucide-react";

export default function Navbar({ onToggleSidebar, onToggleCart }) {
  const [search, setSearch] = useState("");
  const [games, setGames] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const dropdownRef = useRef(null);

  async function handlesearch(e) {
    const query = e.target.value;
    setSearch(query);

    if (query.length < 3) {
      setGames([]);
      setShowResults(false);
      return;
    }

    try {
      const response = await fetch(`https://api.rawg.io/api/games?key=0b73711396bc4420aaa164136aa648e9&search=${query}`);
      const data = await response.json();
      setGames(data.results);
      setShowResults(true);
    } catch (err) {
      console.error("Error fetching search results:", err);
    }
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowResults(false);
      }
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setShowResults(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <nav className="bg-none w-screen flex px-4 py-3 justify-between z-40">
      <Menu className="text-white cursor-pointer hover:text-blue-300" onClick={onToggleSidebar} />
      <div className="relative" ref={dropdownRef}>
        <input
          value={search}
          type="text"
          placeholder="search for games..."
          onChange={handlesearch}
          className="peer bg-white h-7 self-center rounded-2xl p-3 pr-8 placeholder:italic w-[min(60vw,20rem)]"
        />
        <div className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500">
          <Search size={16} />
        </div>
        {showResults && (
          <div className="absolute left-0 right-0 bg-gray-800 w-fit max-h-screen overflow-y-auto z-50 mt-2 mx-auto">
            {games.map((game) => (
              <Link
                to={`/game_details/${game.name}/${game.id}`}
                key={game.id}
                className="p-2 rounded hover:bg-gray-700 flex flex-col items-center"
                onClick={() => setShowResults(false)}
              >
                <img
                  src={game.background_image}
                  alt={game.name}
                  className="w-50 h-40 object-cover rounded"
                />
                <p className="text-white mt-2">{game.name}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
      <ShoppingCart className="text-white cursor-pointer hover:text-blue-300" onClick={onToggleCart} />
    </nav>
  );
}



// import React from "react";
// import { Link } from "react-router-dom";
// import { Menu, ShoppingCart, Search } from "lucide-react";
// import { useState } from "react";

// export default function Navbar({ onToggleSidebar, onToggleCart }){
//     const [search, setSearch] = useState("");
//     const [games, setGames] = useState([])
 
//     async function handlesearch(e) {
//         const query = e.target.value;
//         setSearch(query);
    
//         if (query.length < 3) return; // only search for 3+ letters
    
//         try {
//             const response = await fetch(`https://api.rawg.io/api/games?key=0b73711396bc4420aaa164136aa648e9&search=${query}`);
//             const data = await response.json();
//             console.log(data); // handle this data as needed
//             setGames(data.results);
//         } catch (err) {
//             console.error("Error fetching search results:", err);
//         }
//     }

//     return(
//         <nav className="bg-none w-screen flex px-4 py-3 justify-between z-40">
//             <Menu className="text-white cursor-pointer hover:text-blue-300" onClick={onToggleSidebar}/>
//             <div className="relative">
//                 <input value={search} type="text" placeholder="search for games..." onChange={handlesearch} 
//                     className="peer bg-white h-7 self-center rounded-2xl p-3 pr-8 placeholder:italic w-[min(60vw,20rem)]"
//                 />
//                  <div className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500">
//                     <Search size={16} />
//                 </div>
//                 <div className="hidden peer-focus:block absolute left-0 right-0 bg-gray-800 w-fit max-h-screen overflow-y-auto z-50 mt-2 mx-auto">
//                     {games.map( game => {
//                         return(
//                             <Link to={`/game_details/${game.name}/${game.id}`} key={game.id} className=" p-2 rounded hover:bg-gray-700 flex flex-col items-center">
//                                 <img src={game.background_image} alt={game.name} className="w-50 h-40 object-cover rounded" />
//                                 <p className="text-white mt-2">{game.name}</p>
//                             </Link>
//                         )
//                     })}
//                 </div>
//             </div>
//             <ShoppingCart className="text-white cursor-pointer hover:text-blue-300" onClick={onToggleCart}/>
//         </nav>
        
//     );
// };