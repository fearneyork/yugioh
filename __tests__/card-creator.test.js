const { cardCreator } = require("../card-creator");

describe('Card creation', () => {
    describe('Card Properties', () => {
        //Test 1: check that the cardCreator function creates a new object with the name passed into the function
        test('Test 1: check that the cardCreator function creates a new object with the name passed into the function', () => {
            const testCard = cardCreator("Fissure");

            expect(testCard.name).toBe("Fissure");
        });
    });
});