import { PlayerContext } from "@/contexts/PlayerContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";

export default function Navbar() {
	const { players } = useContext(PlayerContext)
	return <nav className="top-0 w-full fixed px-4 drop-shadow-lg border-b border-slate-400 flex items-center justify-between rounded-lg">
		<button onClick={async () => {
			console.log()
		}} className="hover:bg-gray-900/60 py-1 px-2 rounded-lg focus-visible:outline-white transition-all"><FontAwesomeIcon icon="fa-solid fa-sliders" /></button>
		<span>{players !== null && players[0].split('.')[0]}</span>
		<button className="hover:bg-gray-900/60 py-1 px-2 rounded-lg focus-visible:outline-white transition-all"><FontAwesomeIcon icon="fa-solid fa-gear" /></button>
	</nav>

}
