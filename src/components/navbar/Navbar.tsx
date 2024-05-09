import { PlayerContext } from "@/contexts/PlayerContext";
import { faGear, faSliders } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import PlayerList from "../playerList/PlayerList";

export default function Navbar() {
	const { currentPlayer, isPlayerListOpen, setIsPlayerListOpen } = useContext(PlayerContext)
	return <nav className="top-0 z-40 w-full fixed drop-shadow-lg border-b border-slate-400">
		<div className="px-4 flex items-center justify-between">
			<button onClick={() => {
				if (currentPlayer.name !== "No players found")
					setIsPlayerListOpen(!isPlayerListOpen)
			}} className="hover:bg-gray-900/60 py-1 px-2 rounded-lg focus-visible:outline-white transition-all"><FontAwesomeIcon icon={faSliders} /></button>
			<span>{isPlayerListOpen ? "Players" : currentPlayer.name.split(".")[0]}</span>
			<button className="hover:bg-gray-900/60 py-1 px-2 rounded-lg focus-visible:outline-white transition-all"><FontAwesomeIcon icon={faGear} /></button>
		</div>
	</nav>

}
