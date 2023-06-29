import { GAME_STATE_DRAW, GAME_STATE_PLAYING, GAME_STATE_WIN } from "./Constants";
export default function Header({player, playState, winPlayer}: {player: number, playState: number, winPlayer: number}) {

    const gameHeader = () => {
        switch(playState){
            case GAME_STATE_PLAYING:
                return `Player ${player}'s turn`;
            case GAME_STATE_WIN:
                return `Player ${winPlayer} wins!`;
            case GAME_STATE_DRAW:
                return `It's a draw!`;
                
        }
    }

    return (
      <div className="">
        <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-red-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
            <div className="space-y-2 mx-auto">
                <p className="text-slate-800  text-2xl">{gameHeader()}</p>
            </div>
            </div>
        </div>
      </div>
    )
  }
  