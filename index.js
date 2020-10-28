const fetch = require('node-fetch')
const open = require('open')

const categoryIds = {
    'overall': '01',
    'fun': '02',
    'innovation': '03',
    'theme': '04',
    'graphics': '05',
    'audio': '06',
    'humor': '07',
    'mood': '08'
}


async function openPlace (category, place) {
    const gradeId = categoryIds[category]
    const result = await fetch(`https://api.ldjam.com/vx/node/feed/212256/grade-${gradeId}-result+reverse+parent/item/game/jam?offset=${place}&limit=1`)
    const games = await result.json()
    const gameId = games.feed[0].id
    const url = await getGameUrl(gameId)

    await open(url)
}

async function getGameUrl (id) {
    const game = await(await fetch(`https://api.ldjam.com/vx/node2/get/${id}`)).json()
    console.log(game)
    return `https://ldjam.com/${game.node[0].path}`
}


openPlace(process.argv[2], process.argv[3])

