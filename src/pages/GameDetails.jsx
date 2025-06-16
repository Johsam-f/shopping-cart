import { useNavigate, useParams } from "react-router-dom";
import { ChevronLeft, BaggageClaim } from "lucide-react";
import { useEffect, useState } from "react";

export default function GameDetails() {
  const { id } = useParams();   // get game ID from URL
  const navigate = useNavigate();
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGameDetails() {
      try {
        const response = await fetch(`https://api.rawg.io/api/games/${id}?key=0b73711396bc4420aaa164136aa648e9`);
        const data = await response.json();
        setGame(data);
      } catch (err) {
        console.error("Failed to fetch game details", err);
      } finally {
        setLoading(false);
      }
    }
    fetchGameDetails();
  }, [id]);

  if (loading) return <p className="text-white bg-black">Loading game details...</p>;
  if (!game) return <p className="text-white bg-black">Game not found.</p>;

  function handleAddToCart() {
    const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
    const newItem = {
      id: game.id,
      name: game.name,
      background_image: game.background_image,
    };
  
    // no duplicates
    const exists = cart.some(item => item.id === game.id);
    if (!exists) {
      cart.push(newItem);
      sessionStorage.setItem("cart", JSON.stringify(cart));
      alert(`${game.name} added to cart!`);
    } else {
      alert(`${game.name} is already in the cart.`);
    }
  }

  return (
    <section className="bg-gray-950 min-h-screen w-full p-3 overflow-x-hidden">
      <button onClick={() => navigate(-1)} className="text-white flex backdrop-blur-lg p-1 font-extrabold hover:text-blue-400 cursor-pointer">
        <ChevronLeft /> Back
      </button>

      <section className="mt-3 text-white flex flex-wrap">
        <img
          src={game.background_image}
          alt={game.name}
          className="h-40 md:h-60 object-cover rounded-2xl"
        />

        <button onClick={handleAddToCart} className="float-end flex gap-2 mt-2 cursor-pointer text-black hover:bg-blue-400 ml-4 bg-blue-500 h-10 p-2 rounded-sm">
            <BaggageClaim /> add to cart
        </button>

        <div className="m-3">
          <p className="text-3xl font-bold mb-2 text-amber-400">{game.name}</p>
          <p className="mb-2 italic">
            <span className="font-bold text-amber-400">release Date: </span> {game.released}
          </p>
          <p className="mb-2 font-bold">
            <span className="font-bold text-amber-400">Rating: </span> {game.rating} / 5
            </p>
          <p className="mb-2 font-bold">
            <span className="font-bold text-amber-400">Playtime: </span> {game.playtime} hours
          </p>
          <p className="mb-2"> 
            <span className="font-bold text-amber-400">Platforms:</span> {game.platforms?.map(p => p.platform.name).join(', ') || "N/A"}
            </p>
          <p className="mb-2">
             <span className="font-bold text-amber-400">Genres:</span> {game.genres?.map(g => g.name).join(', ') || "N/A"}</p>
          <p className="mt-2">{game.description_raw || "No description available."}</p>
            {/* Store links */}
            {game.stores && game.stores.length > 0 && (
            <div className="mt-3">
              <p className="font-bold text-lg mb-1 text-amber-300">Available on:</p>
              <ul className="list-disc ml-5">
                {game.stores.map((storeObj) => (
                  <li key={storeObj.id}>
                    <a
                      href={`https://${storeObj.store.domain}`}
                      target="_blank"
                      className="text-blue-300 hover:text-blue-400 hover:underline"
                    >
                      {storeObj.store.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
    </section>
  );
}
