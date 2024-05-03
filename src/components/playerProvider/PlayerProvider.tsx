import { PlayerContext } from "@/contexts/PlayerContext"
import PlayerProviderProps from "@/model/PlayerProviderProps"
import Track from "@/model/Track"
import { getCurrentTrack, getPlayers } from "@/service/playerService"
import { useEffect, useState } from "react"



export default function PlayerProvider({ children }: PlayerProviderProps) {
	let initialPlayers = null
	let initialTrack = null
	const [players, setPlayers] = useState(initialPlayers as string[] | null)
	const [currentPlayer, setCurrentPlayer] = useState("")
	const [track, setTrack] = useState(initialTrack as Track | null)
	const [isDiscMode, setDiscMode] = useState(false)

	useEffect(() => {
		const interval = setInterval(() => {
			let newPlayers = null
			let newTrack = null
			const refreshPlayers = async () => {
				newPlayers = await getPlayers().then(v => v)
				setCurrentPlayer(newPlayers[0].split('.')[0])
				setPlayers(newPlayers)
			}
			const refreshTrack = async () => {
				newTrack = await getCurrentTrack(currentPlayer).then(v => v)
				setTrack(newTrack)
			}

			refreshPlayers().catch(console.error)
			refreshTrack().catch(console.error)

		}, 200)

		return () => clearInterval(interval)
	})
	return (
		<PlayerContext.Provider value={{ players, currentPlayer, track, isDiscMode, setDiscMode }} >
			{children}
		</PlayerContext.Provider>
	)
}
