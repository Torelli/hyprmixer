import { PlayerContext } from "@/contexts/PlayerContext"
import Player from "@/model/Player"
import PlayerProviderProps from "@/model/PlayerProviderProps"
import Track from "@/model/Track"
import { getCurrentTrack, getPlayers } from "@/service/playerService"
import { useEffect, useState } from "react"



export default function PlayerProvider({ children }: PlayerProviderProps) {
	let initialPlayers = [] as Player[]
	let initialTrack = null
	const [players, setPlayers] = useState(initialPlayers as Player[])
	const [currentPlayer, setCurrentPlayer] = useState({ name: "No players found", status: "Stopped\n", volume: 0 })
	const [track, setTrack] = useState(initialTrack as Track | null)
	const [isDiscMode, setDiscMode] = useState(false)
	const [isPlayerListOpen, setIsPlayerListOpen] = useState(false)

	useEffect(() => {
		const interval = setInterval(() => {
			let newPlayers = []
			let newTrack = null
			const refreshPlayers = async () => {
				newPlayers = await getPlayers().then(v => v)
				setPlayers(newPlayers)
			}
			if (players.length >= 1) {
				let refreshTrack
				if (currentPlayer.name === "No players found") {
					setCurrentPlayer(players[0])
					refreshTrack = async () => {
						newTrack = await getCurrentTrack(players[0]).then(v => v)
						setTrack(newTrack)
					}
				} else {
					refreshTrack = async () => {
						newTrack = await getCurrentTrack(currentPlayer).then(v => v)
						setTrack(newTrack)

					}
				}
				refreshTrack().catch(console.error)
			}


			refreshPlayers().catch(console.error)

		}, 200)

		return () => clearInterval(interval)
	})
	return (
		<PlayerContext.Provider value={{ players, currentPlayer, setCurrentPlayer, track, setTrack, isDiscMode, setDiscMode, isPlayerListOpen, setIsPlayerListOpen }} >
			{children}
		</PlayerContext.Provider>
	)
}
