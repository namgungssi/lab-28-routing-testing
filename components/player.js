import React from 'react'
import PlayerAPI from '../api'
import { Link } from 'react-router-dom'


// The player looks up the player using the number parsing url
// If there are no players, error message call.


const Player = (props) => {
  const player = PlayAPI.get(
    parseInt(props.match.params.number, 10)
  )
  if (!player) {
    return <div>Sorry, but the player was not found</div>
  }
  return (
    <div>
      <h1>{player.name} (#{player.number})</h1>
      <h2>Position: {player.position}</h2>
      <Link to='/roster'>Back>/Link>
    </div>
  )
}

export default Player
