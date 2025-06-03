import { useEffect, useRef, useState } from "react";
import { GRID_SIZE, SCALE, INITIAL_POSITION } from "../constants";
import { generateNewFood } from "../lib/food";
import foodSound from '../sounds/food.ogg';
import gameoverSound from '../sounds/gameover.wav';
import confetti from "canvas-confetti";

export function useSnakeGame() {
  const [snake, setSnake] = useState(INITIAL_POSITION);
  const [food, setFood] = useState({ x: 10, y: 10 });
  const [direction, setDirection] = useState([1, 0]);
  const [isRunning, setIsRunning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [score, setScore] = useState(0);

  const playSound = (src) => {
    const audio = new Audio(src);
    audio.volume = 0.5;
    audio.play();
  };

  const [highScore, setHighScore] = useState(() => {
    return parseInt(localStorage.getItem("snakeHighScore")) || 0;
  });

  const resetHighScore = () => {
    localStorage.removeItem("snakeHighScore");
    setHighScore(0);
  };

  const directionRef = useRef(direction);

  useEffect(() => {
    directionRef.current = direction;
  }, [direction]);

  useEffect(() => {
    const handleKey = (e) => {
      e.preventDefault();
      switch (e.key) {
        case "ArrowUp":
          if (directionRef.current[1] === 0) setDirection([0, -1]);
          break;
        case "ArrowDown":
          if (directionRef.current[1] === 0) setDirection([0, 1]);
          break;
        case "ArrowLeft":
          if (directionRef.current[0] === 0) setDirection([-1, 0]);
          break;
        case "ArrowRight":
          if (directionRef.current[0] === 0) setDirection([1, 0]);
          break;
        case "p":
        case "P":
          togglePause();
          break;
      }
    };

    window.addEventListener("keydown", handleKey, { passive: false });
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    if (!isRunning || isPaused) return;

    const interval = setInterval(() => {
      const head = snake[0];

      let newX = head.x + directionRef.current[0];
      let newY = head.y + directionRef.current[1];

      if (newX < 0) newX = GRID_SIZE - 1;
      if (newX >= GRID_SIZE) newX = 0;
      if (newY < 0) newY = GRID_SIZE - 1;
      if (newY >= GRID_SIZE) newY = 0;

      const newHead = { x: newX, y: newY };

      const hitSelf = snake.some(segment =>
        segment.x === newHead.x && segment.y === newHead.y
      );

//old wall collision
      /*
      const newHead = {
        x: head.x + directionRef.current[0],
        y: head.y + directionRef.current[1],
      };

      const hitWall =
        newHead.x < 0 ||
        newHead.y < 0 ||
        newHead.x >= GRID_SIZE ||
        newHead.y >= GRID_SIZE;

      if (hitWall || hitSelf) {
      */

      if (hitSelf) {
        const isNewHighScore = score > highScore;

        if (isNewHighScore) {
          setHighScore(score);
          localStorage.setItem("snakeHighScore", score);

          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.7 },
          });
        }

        setIsRunning(false);
        playSound(gameoverSound);
        return;
      }

      const ateFood = newHead.x === food.x && newHead.y === food.y;
      const newSnake = [newHead, ...snake];
      if (!ateFood) newSnake.pop();

      setSnake(newSnake);

      if (ateFood) {
        const newFood = generateNewFood(newSnake);
        setFood(newFood);
        setScore(prev => prev + 1);
        playSound(foodSound);
        console.log("food eaten");
      }
    }, 140);

    return () => clearInterval(interval);
  }, [snake, isRunning, isPaused, food]);

  const restart = () => {
    setSnake(INITIAL_POSITION);
    setDirection([1, 0]);
    directionRef.current = [1, 0];
    setScore(0);
    setIsRunning(true);
    setIsPaused(false);
    setFood({ x: 10, y: 10 });
  };

  const togglePause = () => {
    setIsPaused(prev => !prev);
  };

return { isRunning, isPaused, score, highScore, restart, togglePause, snake, food, resetHighScore };
}