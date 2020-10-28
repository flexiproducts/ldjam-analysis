import React, { useState } from 'react'
import ReactDom from 'react-dom'
import { getUrlForPlace, categoryIds } from './lib'

function App () {
    const [place, setPlace] = useState(1)
    const [category, setCategory] = useState('overall')

    async function onClick() {
        const url = await getUrlForPlace(category, place)
        window.open(url)
    }

    return <div className="centered nes-container with-title">
        <p class="title">Ludum Dare 47 Lookup</p>
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
        <button className="nes-btn is-primary" onClick={onClick}>Fetch</button>
    </div>
}
ReactDom.render(<App />, document.getElementById('app'))