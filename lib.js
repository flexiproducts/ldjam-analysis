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

export async function getUrlForPlace (category, place) {
    const gradeId = categoryIds[category]
    const result = await fetch(`https://api.ldjam.com/vx/node/feed/212256/grade-${gradeId}-result+reverse+parent/item/game/jam?offset=${place - 1}&limit=1`)
    const games = await result.json()
    const gameId = games.feed[0].id
    const url = await getGameUrl(gameId)

    return url
}

export async function getGameUrl (id) {
    const game = await(await fetch(`https://api.ldjam.com/vx/node2/get/${id}`)).json()
    return `https://ldjam.com/${game.node[0].path}`
}
