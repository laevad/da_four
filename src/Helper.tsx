import { NO_PLAYER } from "./components/Constants";

export const isWinner = (board: any, move: number, currentPlayer:number) => {

    let gameBoard = [...board];
    gameBoard[move] = currentPlayer;

    const winningCombos = [
        [0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11],
        [12, 13, 14, 15], [0, 4, 8, 12], [1, 5, 9, 13],
        [2, 6, 10, 14], [3, 7, 11, 15], [0, 5, 10, 15],
        [3, 6, 9, 12]
    ];

    for (let i = 0; i < winningCombos.length; i++) {
        const [a, b, c, d] = winningCombos[i];
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c] && gameBoard[a] === gameBoard[d]) {
            return true;
        }   
    }
    return false;
};


export const isDraw = (board: any, move: number, currentPlayer: number) => {
   let gameBoard = [...board];
    gameBoard[move] = currentPlayer;

    let count = gameBoard.reduce((acc: number, curr: number) => 
    acc + (curr === NO_PLAYER ? 1 : 0), 0);
    return count === 0;
}

 const getRandomComputerMove = (board: any) => {
    let validMoves = [];
    for (let i = 0; i < board.length; i++) {
        if (board[i] === NO_PLAYER) {
            validMoves.push(i);
        }
    }
    return validMoves[Math.floor(Math.random() * validMoves.length)];
}


const getPosition = (board: any, move: any) => { 
    for(let check = 0; check < move.length; check++){
        for(let i = 0; i < move[check].max; i += move[check].step){
            let series = board[i + move[check].indexes[0]]?.toString()+ 
            board[i + move[check].indexes[1]]?.toString() + 
            board[i + move[check].indexes[2]]?.toString() + 
            board[i + move[check].indexes[3]]?.toString();

            switch(series){
                case "1110":
                case "2220":
                    return i + move[check].indexes[3];
                case "1101":
                case "2202":
                    return i + move[check].indexes[2];
                case "1011":
                case "2022":
                    return i + move[check].indexes[1];
                case "0111":
                case "0222":
                    return i + move[check].indexes[0];
            }
        }
    }
 }

export const getBestComputerMove = (board: any) => {
    let moveChecs = [
        // vertical
        {
            indexes: [0, 4, 8, 12],
            max: 4,
            step: 1
        },
        // horizontal
        {
            indexes: [0, 1, 2, 3],
            max: 16,
            step: 1,
        },
        // diagonal
        {
            indexes: [0, 5, 10, 15],
            max: 16,
            step: 16,
        },
        // diagonal
        {
            indexes: [3, 6, 9, 12],
            max: 16,
            step: 16,
        }
    ];

    let position = getPosition(board, moveChecs);
    if(position !== undefined){
        return position;
    }
    return getRandomComputerMove(board);
    
}