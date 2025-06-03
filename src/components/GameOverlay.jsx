import React from 'react';

const GameOverlay = ({ score, level, highScore }) => {
  const isNewHighScore = score === highScore && score > 0;

  return (
    <div className="absolute inset-0 flex items-center justify-center z-20">
      <div className="absolute inset-0 bg-purple-200 opacity-60 rounded-xl"></div>

      <div className="relative z-10 text-center space-y-4 text-white">
        <h2 className="text-7xl chewy-regular text-pink-400">game over</h2>
        <p className="text-4xl chewy-regular text-purple-600">final score:{score}</p>
        {isNewHighScore && (
          <p className="text-4xl text-pink-300 chewy-regular">new high score!</p>
        )}
      </div>
    </div>
  );
};

export default GameOverlay;