import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'

const Game = (props) => {
  const {singleGame, loading, setLoading, getSingleGame} = props;
  const id = useParams().id;
  useEffect(() => {
  getSingleGame(id);
  },[]);
  return (
    <div>
      <h1>Game</h1>
      <p>{singleGame.name}</p>

    </div>
  )
}

export default Game