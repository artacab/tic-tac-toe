class TicTacToe {
    constructor() {
        this.grid = [[null, null, null], [null, null, null], [null, null,null]];
        this.gamer = 'x';
    }

    getCurrentPlayerSymbol() {
        return this.gamer;
    }

    nextTurn(rowIndex, columnIndex) {
        if(this.grid[rowIndex][columnIndex] == null){
            this.grid[rowIndex][columnIndex] = this.gamer;
            this.gamer = this.gamer == 'x' ? 'o' : 'x';
        }
    }

    isFinished() {
        if(this.getWinner() || this.isDraw())
            return true;
        else return false;
    }

    getWinner() {
        for (let i = 0; i < 3; i++) {
            if(this.grid[i][0] == this.grid[i][1] && this.grid[i][0] == this.grid[i][2]){
                return this.grid[i][0];
            } 
        }
        for (let i = 0; i < 3; i++) {
            if(this.grid[0][i] == this.grid[1][i] && this.grid[0][i] == this.grid[2][i]){
                return this.grid[0][i];
            } 
        }
        if(this.grid[0][0] == this.grid[1][1] && this.grid[0][0] == this.grid[2][2]){
            return this.grid[0][0];
        }
        if(this.grid[0][2] == this.grid[1][1] && this.grid[0][2] == this.grid[2][0]){
            return this.grid[0][2];
        }  
        return null;
    }
    noMoreTurns(){
        if (this.grid[0].includes(null) || this.grid[1].includes(null) || this.grid[2].includes(null))
            return false;
        return true;
    }

    isDraw() {
        if(this.noMoreTurns() && !this.getWinner())
            return true;
        return false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.grid[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
