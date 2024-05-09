import Track from './components/track/Track'
import Navbar from './components/navbar/Navbar'
import { useContext } from 'react'
import { PlayerContext } from './contexts/PlayerContext'
import PlayerList from './components/playerList/PlayerList'

function App() {
  const { isPlayerListOpen } = useContext(PlayerContext)

  if (isPlayerListOpen) return <div className="select-none flex items-center justify-center h-dvh">
    <Navbar />
    <PlayerList />
  </div>
  else return <div className="select-none flex items-center justify-center h-dvh">
    <Navbar />
    <Track />
  </div>

}

export default App
