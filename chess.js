function Board() {
    this.squares = new Array();
    var i, j;
    for (i = 0; i < 8; i++){
        this.squares.push([]);
        for (j = 0; j < 8; j++){
            this.squares[i][j] = false;
        };
    };
};

module.exports = {Board: Board};
