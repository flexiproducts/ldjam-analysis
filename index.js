const fetch = require('node-fetch')
const open = require('open')
const { getUrlForPlace } = require('./lib')



async function openPlace (category, place) {
    const url = getUrlForPlace(category, place)

    await open(url)
}

async function getGameUrl (id) {
    const game = await(await fetch(`https://api.ldjam.com/vx/node2/get/${id}`)).json()
    console.log(game)
    return `https://ldjam.com/${game.node[0].path}`
}


// openPlace(process.argv[2], process.argv[3])

