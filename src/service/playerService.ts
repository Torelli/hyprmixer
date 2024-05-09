import Player from "@/model/Player"
import Track from "@/model/Track"

async function getPlayers(): Promise<Player[]> {
  const players = await window.playerCtlAPI.getPlayers()

  return players
}

async function getCurrentTrack(player: Player): Promise<Track> {
  if (player.name === "" || player === undefined) return { title: "", artUrl: "", artist: "", length: "", status: "", position: "" }
  const track = await window.playerCtlAPI.getCurrentTrack(player)

  return track
}

async function getPlayerVolume(player: string): Promise<string> {
  return await window.playerCtlAPI.getPlayerVolume(player)
}

function setPlayerVolume(player: string, volume: number) {
  window.playerCtlAPI.setPlayerVolume(player, volume)
}

function togglePlayPause(player: string) {
  window.playerCtlAPI.togglePlayPause(player)
}

function next(player: string) {
  window.playerCtlAPI.next(player)
}

function prev(player: string) {
  window.playerCtlAPI.prev(player)
}

function changePosition(player: string, position: string) {
  window.playerCtlAPI.changePosition(player, position)
}

export { getPlayers, getCurrentTrack, togglePlayPause, next, prev, changePosition, getPlayerVolume, setPlayerVolume }
