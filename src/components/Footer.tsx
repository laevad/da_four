import { GAME_STATE_PLAYING } from "./Constants";

type FooterProps = { 
  onClick: any, 
  onSuggest: any, 
  gameState: any, 
  disabled: boolean
};
export default function Footer({ onClick, onSuggest, disabled, gameState }: FooterProps) {

  const buttonCondition = () => {
    if(gameState === GAME_STATE_PLAYING){
      return   <button onClick={onSuggest}
      disabled={disabled}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Suggest
  </button>;
    }
    return <button onClick={onClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    New Game
  </button>;
  }

  return (
    <div className="mt-5">
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-red-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
            {/* New Game and suggest button (space between) */}
            <div className="mx-auto space-x-4">
             {buttonCondition()}
            </div>

        </div>
      </div>
    </div>
  )
}
