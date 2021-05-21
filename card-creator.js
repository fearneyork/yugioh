const { cardLibrary } = require("./card-library");

function cardCreator(cardName) {
    const newCard = {};

    newCard.name = cardName;

    return newCard;
}




module.exports = {cardCreator};