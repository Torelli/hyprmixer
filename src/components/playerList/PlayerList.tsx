import { PlayerContext } from "@/contexts/PlayerContext"
import Player from "@/model/Player"
import { setPlayerVolume, togglePlayPause } from "@/service/playerService"
import { faPause, faPlay, faVolumeHigh, faVolumeLow, faVolumeXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext, useEffect, useState } from "react"

function PlayerContainer({ player }: { player: Player }) {
	const { currentPlayer, setCurrentPlayer } = useContext(PlayerContext)
	const [volume, setVolume] = useState(Math.round(player.volume * 100))
	const [isPlaying, setIsPlaying] = useState(player.status === "Playing\n")

	function handleVolumeChange(playerName: string, volume: number) {
		if (volume < 0) volume = 0
		if (volume > 1) volume = 1
		setVolume(volume * 100)
		setPlayerVolume(playerName, volume)
	}

	function handleTogglePlay() {
		setIsPlaying(!isPlaying)
		togglePlayPause(player.name)
	}

	return <li className="pl-6 py-2 border-b border-b-slate-400 flex justify-start items-center w-full hover:bg-[rgba(36,40,59,0.4)]" key={player.name}>
		<input checked={currentPlayer.name === player.name} onChange={() => setCurrentPlayer(player)} id={player.name} type="radio" value={player.name} name="player-select" className="appearance-none cursor-pointer w-4 h-4 rounded-full border accent-white checked:appearance-auto" />
		<label htmlFor={player.name} className="ms-2 text-sm sm:text-base min-w-32 sm:min-w-52 cursor-pointer">{player.name.split(".")[0]}</label>
		<button onClick={() => handleTogglePlay()} type="button" className="px-3 pb-1 sm:px-4 sm:pb-1 border border-slate-600 bg-[rgba(36,40,59,0.4)] drop-shadow rounded hover:bg-[rgba(36,40,59,0.6)] hover:drop-shadow-2xl hover:border-slate-400 focus-visible:outline-white transition-all">
			<FontAwesomeIcon className="text-xs" icon={isPlaying ? faPause : faPlay} />
		</button>
		<button onWheel={(e) => {
			if (player.volume < 1) {
				if (e.deltaY < 0) {
					handleVolumeChange(player.name, player.volume + 0.1)
				}
				if (player.volume > 0) {
					if (e.deltaY > 0) {
						handleVolumeChange(player.name, player.volume - 0.1)
					}
				}
			}
		}} onClick={() => player.volume > 0 ? handleVolumeChange(player.name, 0) : handleVolumeChange(player.name, 1)} type="button" className="px-3 pb-1 ms-1 sm:ms-4 sm:px-4 sm:pb-1 border border-slate-600 bg-[rgba(36,40,59,0.4)] drop-shadow rounded hover:bg-[rgba(36,40,59,0.6)] hover:drop-shadow-2xl hover:border-slate-400 focus-visible:outline-white transition-all">
			<FontAwesomeIcon className="text-xs" icon={volume >= 50 ? faVolumeHigh : volume >= 10 ? faVolumeLow : faVolumeXmark} />
		</button>
		<div className="hidden md:inline ms-4 h-1 bg-slate-700 relative w-1/3 rounded-full group">
			<input type="range" min="0" max="100" onChange={(e) => handleVolumeChange(player.name, +e.target.value / 100)} value={volume} className="z-50 absolute w-full h-1 rounded-lg appearance-none cursor-pointer range-sm bg-transparent [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-2 [&::-webkit-slider-thumb]:w-2 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full group-hover:[&::-webkit-slider-thumb]:h-3 group-hover:[&::-webkit-slider-thumb]:w-3 focus-visible:outline-none" />
			<div className="z-0 absolute h-1 rounded-full bg-white" style={{ width: volume + "%" }}></div>
			<div className="opacity-0 translate-x-1 whitespace-nowrap bg-[rgba(36,40,56,0.6)] text-white text-center text-base rounded-lg py-2 absolute z-10 group-hover:translate-x-0 group-hover:opacity-100 -top-[1.18rem] -right-20 px-3 pointer-events-none transition-all">
				<span id="theme-tooltip">
					{Math.round(volume) + "%"}
				</span>
			</div>
		</div>
		<span className="ms-2 whitespace-nowrap bg-[rgba(36,40,56,0.6)] text-white text-center text-sm rounded-lg py-2 px-3 pointer-events-none sm:hidden">
			{Math.round(volume) + "%"}
		</span>

	</li >
}

function listPlayers(players: Player[] | null) {
	if (players !== null) {
		return players.sort((a, b) => {
			if (a.name < b.name) return -1
			if (a.name > b.name) return 1
			return 0
		}).map(player => <PlayerContainer player={player} />)
	}
}

export default function PlayerList() {
	const { players } = useContext(PlayerContext)
	let listItems = listPlayers(players)

	useEffect(() => {
		listItems = listPlayers(players)
	})

	return <ul className="overflow-y-scroll mt-16 h-screen w-full">{listItems}</ul>
}
