import { PlayerContext } from "@/contexts/PlayerContext";
import { faGear, faSliders } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";

export default function Navbar() {
	const { currentPlayer, pageOpened, setPageOpened } = useContext(PlayerContext)
	return <nav className="top-0 z-40 w-full fixed drop-shadow-lg border-b border-slate-400">
		<div className="px-4 flex items-center justify-between">
			<button onClick={() => {
				if (currentPlayer.name !== "No players found")
					setPageOpened(pageOpened !== 1 ? 1 : 0)
			}} className="hover:bg-gray-900/60 py-1 px-2 rounded-lg focus-visible:outline-white transition-all"><FontAwesomeIcon icon={faSliders} /></button>
			<span>{pageOpened !== 0 ? pageOpened === 2 ? "Settings" : "Players" : currentPlayer.name.split(".")[0]}</span>
			<button onClick={() => {
				if (currentPlayer.name !== "No players found")
					setPageOpened(pageOpened !== 2 ? 2 : 0)
			}} className="hover:bg-gray-900/60 py-1 px-2 rounded-lg focus-visible:outline-white transition-all"><FontAwesomeIcon icon={faGear} /></button>
		</div>
	</nav>

}
