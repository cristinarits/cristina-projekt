import { GRID_SIZE } from "../constants";

export function generateNewFood(snakeBody) {
  let newFood;
  do {
    newFood = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    };
  } while (snakeBody.some(segment => segment.x === newFood.x && segment.y === newFood.y));
  return newFood;
}