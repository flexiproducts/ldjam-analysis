import React, { useEffect, useState } from 'react'
import ReactDom from 'react-dom'
import { getGameForPlace, categoryIds } from './lib'

function App () {
    const [place, setPlace] = useState(1)
    const [category, setCategory] = useState('overall')
    const [game, setGame] = useState();

    useEffect(() => {
        let cancelled = false
        getGameForPlace(category, place).then(game => {
            if (!cancelled) setGame(game)
        })

        return () => {
            cancelled = true
        }

    }, [place, category])

    return <div className="centered nes-container with-title">
        <p className="title">Ludum Dare 47 Lookup</p>
        <div className="nes-field">
            <label htmlFor="place">Place</label>
            <input type="number" id="place" className="nes-input" value={place} onChange={(event) => setPlace(event.target.value)} />
        </div>
        <label htmlFor="category">Category</label>
        <div className="nes-select">
            <select required id="category" value={category} onChange={(event) => setCategory(event.target.value)}>
                {Object.keys(categoryIds).map(id => <option key={id} value={id}>{id}</option>)}
            </select>
        </div>
        {game && <GameThumbnail game={game} />}
    </div>
}

function GameThumbnail({game}) {
    return <><h3>{game.name}</h3><a href={game.link}><img style={{width: '100%'}} src={game.cover} alt="Game" /></a></>
}
ReactDom.render(<App />, document.getElementById('app'))