import React from 'react';
import { Trophy, Target } from 'lucide-react';

export default function ScoreDisplay({ score, highScore }) {
  return (
    <div className="flex flex-col space-y-15">
      <div className="bg-gradient-to-br from-pink-200 to-pink-300 border border-pink-400 rounded-xl p-6 shadow-lg min-w-[120px]">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Target className="w-5 h-5 text-pink-600" />
          <h3 className="text-4xl chewy-regular text-pink-700">score</h3>
        </div>
        <p className="text-6xl chewy-regular text-purple-800">{score}</p>
      </div>
      
      <div className="bg-gradient-to-br from-purple-200 to-purple-300 border border-purple-400 rounded-xl p-6 shadow-lg min-w-[120px]">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Trophy className="w-5 h-5 text-purple-600" />
          <h3 className="text-4xl chewy-regular text-purple-700">best</h3>
        </div>
        <p className="text-6xl chewy-regular text-pink-800">{highScore}</p>
      </div>
    </div>
  );
}