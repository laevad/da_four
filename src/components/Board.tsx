import { useEffect, useState } from "react";
import Circle from "./Circle";
import Header from "./Header";
import Footer from "./Footer";
import { PLAYER_ONE, PLAYER_TWO, NO_PLAYER, GAME_STATE_PLAYING, GAME_STATE_WIN, GAME_STATE_DRAW } from "./Constants";
import { getBestComputerMove, isDraw, isWinner } from "../Helper";
export default function Board() {
    const [gameState, setGameState] = useState(Array(16).fill(NO_PLAYER))
    const [currentPlayer, setCurrentPlayer] = useState(PLAYER_ONE);
    const [playState, setPlayState] = useState(GAME_STATE_PLAYING);
    const [winningPlayer, setWinningPlayer] = useState(0);


    useEffect(() => {
      initGame();
    }, []);

    const initGame = () => {
      setGameState(Array(16).fill(NO_PLAYER));
      setCurrentPlayer(PLAYER_ONE);
      setPlayState(GAME_STATE_PLAYING);
    }


    const suggestMove = () => {
      if(playState !== GAME_STATE_PLAYING) return;
      let move = getBestComputerMove(gameState);
      if(move === undefined) return;
      handleClick(move);
    }
      

    const handleClick = (id: number) => {
   
      if(gameState[id] !== NO_PLAYER ) return;
      if(playState !== GAME_STATE_PLAYING) return;
      if(isWinner(gameState, id, currentPlayer)){
        setPlayState(GAME_STATE_WIN);
        setWinningPlayer(currentPlayer);
      }
      if(isDraw(gameState, id, currentPlayer)){
        setPlayState(GAME_STATE_DRAW);
        setWinningPlayer(NO_PLAYER);
      }

        setGameState(prev =>{
          return prev.map((circle, pos) => {
            if(pos === id){
              return currentPlayer;
            }
            return circle;
          })
        })
        setCurrentPlayer(currentPlayer === PLAYER_ONE ? PLAYER_TWO : PLAYER_ONE);
    }
        
    return (
      <>
      <Header player={currentPlayer} playState={playState} winPlayer={winningPlayer}/>
      <div className="relative group mt-4">
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-red-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
      <div className="relative px-2 py-2 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
      <div className="grid grid-cols-4 grid-rows-4 gap-4 md:gap-10 mt-1 p-10 rounded-lg">
        {/* Loop to render the circles */}
        {[...Array(16)].map((_, i) => (
          <Circle key={i} id={i}
            color={`player-${gameState[i] || NO_PLAYER}`}
            handleClick={() => handleClick(i)}
          >
            {i}
          </Circle>
        ))}
      </div>
      </div>
      </div>
      <Footer 
      onClick={initGame} 
      onSuggest={suggestMove}
      gameState={playState}
      disabled={playState !== GAME_STATE_PLAYING}
      />
      </>
      
    );
    
}
