import React, { useState } from 'react'
import ReactDom from 'react-dom'
import { getUrlForPlace } from './lib'

function App () {
    const [place, setPlace] = useState(1)
    const [category, setCategory] = useState('overall')

    async function onClick() {
        const url = await getUrlForPlace(category, place)
        window.open(url)
    }

    return <div>
        Place <input type="number"value={place} onChange={(event) => setPlace(event.value)}/>
        Category <input value={category} onChange={(event) => setCategory(event.value)} />
        <button onClick={onClick}>Fetch</button>
    </div>
}

ReactDom.render(<App />, document.getElementById('app'))