import React from "react";
import { Button } from './ui/button';

export default function GameControls({ isPaused, isRunning, restart, togglePause, resetHighScore }) {
    return (
        <div className="flex justify-center gap-10">
            {isRunning && (
                <Button onClick={(e) => (e.currentTarget.blur(), togglePause())}>
                    {isPaused ? "resume" : "pause"}
                </Button>
            )}
            <Button onClick={(e) => (e.currentTarget.blur(), restart())}>
                restart
            </Button>

            <Button onClick={(e) => (e.currentTarget.blur(), resetHighScore())}>
                reset high score
            </Button>
        </div>
    );
}