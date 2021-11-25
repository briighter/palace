class TableName {
    constructor(name) {
        this.name = 'GameHistory';
    }
}

class Item {
    constructor(gameId, game, numberOfItems, numberOfSeconds, gameResult) {
        this.gameId = gameId,
        this.game = game,
        this.numberOfItems = numberOfItems,
        this.numberOfSeconds = numberOfSeconds,
        this.gameResult = gameResult
    }
}

var params = {
    TableName,
    Item
}

module.exports = params;