describe('Pizza', function() {
    it("returns the boards", function() {
        var testBoard = new Board();
        testBoard.createBoard();
        expect(testBoard.spaces).to.be.an('array');
    });
});

describe('Order', function() {
    it("creates two players", function() {
        var testGame = new Game();
        testGame.createPlayers();
        expect(testGame.players).to.eql([testGame.players[0], testGame.players[1]]);
    });
});
