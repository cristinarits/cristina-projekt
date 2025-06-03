import GameCanvas from './components/GameCanvas';
import ScoreDisplay from './components/ScoreDisplay';
import { useSnakeGame } from './hooks/useSnakeGame';
import './index.css';
import { GRID_SIZE } from './constants';
import GameControls from './components/GameControls';
import snake from './components/ui/snake.png';
import VantaBackground from "./components/VantaBackground";
import Tutorial from './components/Tutorial';

export default function App() {
  const game = useSnakeGame();

  return (
    <VantaBackground>
      <div className="text-center space-y-8 z-10 px-4 mt-[-100px]">
        <div className="space-y-2">
          <img src={snake} alt="lil snake" className='w-48 mx-auto drop-shadow-lg' />
          <h1 className="text-6xl chewy-regular pb-2 bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
            lil snake game
          </h1>
        </div>

        <div className="relative flex items-center justify-center">
          <GameCanvas boardSize={GRID_SIZE} {...game} />

          <div className="absolute left-[-200px] top-1/2 transform -translate-y-1/2">
          <ScoreDisplay score={game.score} highScore={game.highScore} />
          </div>

          <div className="absolute right-[-250px] top-1/2 transform -translate-y-1/2">
          <Tutorial />
          </div>
        </div>

        <GameControls
          isPaused={game.isPaused}
          isRunning={game.isRunning}
          restart={game.restart}
          togglePause={game.togglePause}
          resetHighScore={game.resetHighScore}
        
        />
      </div>
    </VantaBackground>
  );
}