import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function Games(){
    const [games, setGames] = useState([])
    const { category } = useParams();  // get category from URL


    useEffect(() => {
        async function fetchGames() {
            try { // If category, add search query
                
                let url = `https://api.rawg.io/api/games?page_size=30&key=0b73711396bc4420aaa164136aa648e9`;

                if (category) {
                    url += `&genres=${category}`;  // or `&tags=${category}` depending on RAWG API
                }
                    
                const response = await fetch(url);
                const data = await response.json();
                setGames(data.results);
            } catch (error) {
                console.error("Failed to fetch games", error);
            }
        }
        fetchGames();
    }, [category]);

    return (
        <div className="px-2 pb-12 h-full overflow-y-scroll">
          <h1 className="text-2xl font-bold mb-4 text-white">{category? category: "All"} Games</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {games.map((game) => (
              <Link to={`/game_details/${game.name}/${game.id}`} key={game.id} className="p-2 rounded backdrop-blur-2xl">
                <img
                  src={game.background_image}
                  alt={game.name}
                  className="w-full h-40 object-cover rounded"
                />
                <p className="text-white mt-2">{game.name}</p>
              </Link>
            ))}
          </div>
        </div>
      );
}