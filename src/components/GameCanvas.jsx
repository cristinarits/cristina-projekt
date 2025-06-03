import React from 'react';
import GameOverlay from './GameOverlay';
import foodImg from './ui/food.png';

export default function GameCanvas({ snake, food, isRunning, isPaused, restart, togglePause, boardSize, score, highScore }) {
  if (!snake || !Array.isArray(snake) || snake.length === 0 || !snake[0]) return null;

  const renderCell = (x, y) => {
    const isSnakeHead = snake[0] && snake[0].x === x && snake[0].y === y;
    const isSnakeBody = snake.slice(1).some(segment => segment.x === x && segment.y === y);
    const isFood = food.x === x && food.y === y;

    if (isFood) {
      return (
        <div key={`${x}-${y}`} className="w-6 h-6 flex items-center justify-center">
          <img src={foodImg} alt="food" className="w-5 h-5 object-contain" />
        </div>
      );
    }

    let cellClass = "w-6 h-6 border border-purple-200 transition-all duration-150";

    if (isSnakeHead) {
      cellClass += " bg-gradient-to-br from-purple-400 to-purple-500 border-purple-300 shadow-lg shadow-purple-500/50 scale-110";
    } else if (isSnakeBody) {
      cellClass += " bg-gradient-to-br from-purple-300 to-purple-400 border-purple-300";
    } else {
      cellClass += " bg-pink-50 hover:bg-pink-100";
    }

    return <div key={`${x}-${y}`} className={cellClass} />;
  };

  const board = [];
  for (let y = 0; y < boardSize; y++) {
    const row = [];
    for (let x = 0; x < boardSize; x++) {
      row.push(renderCell(x, y));
    }
    board.push(
      <div key={y} className="flex">
        {row}
      </div>
    );
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <div className="relative inline-block overflow-hidden">
        <div className="p-2 border-2 border-pink-300 rounded-lg bg-white shadow-xl">
          <div className="grid gap-0">{board}</div>
        </div>

        {/* Pause Overlay */}
        {isPaused && isRunning && (
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="absolute inset-0 bg-purple-200 opacity-60 rounded-xl"></div>
            <div className="relative z-10 text-center space-y-4 text-white">
              <h2 className="text-6xl chewy-regular text-pink-400">Paused</h2>
            </div>
          </div>
        )}

        {/* Game Over Overlay */}
        {!isRunning && (
          <GameOverlay score={score} highScore={highScore} />
        )}
      </div>
    </div>
  );
}