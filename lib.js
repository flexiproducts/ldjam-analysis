export const categoryIds = {
    'overall': '01',
    'fun': '02',
    'innovation': '03',
    'theme': '04',
    'graphics': '05',
    'audio': '06',
    'humor': '07',
    'mood': '08'
}

export async function getGameForPlace (category, place) {
    const gradeId = categoryIds[category]
    const result = await fetch(`https://api.ldjam.com/vx/node/feed/212256/grade-${gradeId}-result+reverse+parent/item/game/jam?offset=${place - 1}&limit=1`)
    const games = await result.json()
    const gameId = games.feed[0].id
    const game = await getGame(gameId)

    console.log(game)

    return {
        link: `https://ldjam.com/${game.path}`,
        cover: getCover(game),
        name: game.name
    }
}

export async function getGame (id) {
    const game = await(await fetch(`https://api.ldjam.com/vx/node2/get/${id}`)).json()
    return game.node[0]
}

function getCover(game) {
    return 'http://static.jam.vg/' + game.meta.cover.slice(3)
}
