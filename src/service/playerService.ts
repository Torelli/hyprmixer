import Track from "@/model/Track"

async function getPlayers(): Promise<string[]> {
  const players = await window.playerCtlAPI.getPlayers()

  return players
}

async function getCurrentTrack(player: string): Promise<Track> {
  if (player == "") return
  const track = await window.playerCtlAPI.getCurrentTrack(player)

  return track
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

export { getPlayers, getCurrentTrack, togglePlayPause, next, prev }
