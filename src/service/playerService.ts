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

export { getPlayers, getCurrentTrack }
