import { Dispatch, SetStateAction } from "react"
import Track from "./Track"
import Player from "./Player"

export default interface PlayerContextProps {
  players: Player[] | null
  currentPlayer: Player
  setCurrentPlayer: Dispatch<SetStateAction<Player>>
  track: Track | null
  setTrack: Dispatch<SetStateAction<Track | null>>
  isDiscMode: boolean
  setDiscMode: Dispatch<SetStateAction<boolean>>
  pageOpened: number
  setPageOpened: Dispatch<SetStateAction<number>>
}
