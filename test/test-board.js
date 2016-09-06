//smoke test
casper.test.begin("Hello, Test!", 1, function(test) {
    test.assert(true);
    test.done();
});

var chess = require("../chess.js");

casper.test.begin("Board has 8 rows and 8 columns", 9, function suite(test){
    var board = new chess.Board();
    test.assertEquals(board.squares.length, 8);
    for (var row in board.squares) {
        test.assertEquals(row.length, 8);
    };

    test.done();
});
