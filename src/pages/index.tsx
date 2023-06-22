import { useState } from 'react';
import styles from './index.module.css';

const Home = () => {
  const [userInputs, setUserInputs] = useState<(0 | 1 | 2 | 3)[][]>([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  const [bombMap, setBombMap] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  const board = [
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
  ];

  const directions = [
    [-1, 0],
    [-1, -1],
    [0, -1],
    [1, -1],
    [1, 0],
    [1, 1],
    [0, 1],
    [-1, 1],
  ];
  // -1 = 石
  // 0 = 画像なしセル
  // 1~8 画像セル
  // 9 石＋はてな
  // 10 石＋旗
  // 11 bomb
  const newBombMap: number[][] = JSON.parse(JSON.stringify(bombMap));
  const newUserInputs: (0 | 1 | 2 | 3)[][] = JSON.parse(JSON.stringify(userInputs));
  const isPlaying = userInputs.some((row) => row.some((input) => input !== 0));
  const isFailure = userInputs.some((row, y) =>
    row.some((input, x) => input === 1 && bombMap[y][x] === 1)
  );
  //bomb設置
  const setBomb = (x: number, y: number) => {
    for (let bombCount = 0; bombCount < 10; bombCount++) {
      const randomBombY = Math.floor(Math.random() * 9);
      const randomBombX = Math.floor(Math.random() * 9);
      if (newBombMap[randomBombY][randomBombX] !== 1 && (randomBombX !== x || randomBombY !== y)) {
        newBombMap[randomBombY][randomBombX] = 1;
      } else {
        bombCount--;
      }
    }
  };
  //数字表示
  const checkAround = (x: number, y: number) => {
    let bombCount = 0;
    for (const dir of directions) {
      if (board[y + dir[1]] !== undefined && board[y + dir[1]][x + dir[0]] !== undefined) {
        bombCount += bombMap[y + dir[1]][x + dir[0]];
      }
    }
    board[y][x] = bombCount;
    if (bombCount === 0) {
      for (const dir of directions) {
        if (board[y + dir[1]] !== undefined && board[y + dir[1]][x + dir[0]] === -1) {
          checkAround(x + dir[0], y + dir[1]);
        }
      }
    }
  };
  //bomb表示
  for (let y = 0; y < 9; y++) {
    for (let x = 0; x < 9; x++) {
      if (userInputs[y][x] === 1) {
        if (bombMap[y][x] === 1) {
          board[y][x] = 11;
          console.log('nya');
        } else {
          checkAround(x, y);
        }
      }
    }
  }

  
  if (isFailure) {
    for (let y = 0; y < 9; y++) {
      for (let x = 0; x < 9; x++) {
        if (bombMap[y][x] === 1) {
          board[y][x] = 11;
        }
      }
    }
  }
  //クリックしたらボムのマップをつくる
  const onClick = (x: number, y: number) => {
    console.log(x, y);
    newUserInputs[y][x] = 1;
    setUserInputs(newUserInputs);
    if (!isPlaying) {
      setBomb(x, y);
    }
    let BombExist = false;
    for (const row of bombMap) {
      for (const cell of row) {
        if (cell === 1) {
          BombExist = true;
          break;
        }
      }
    }
    setBombMap(newBombMap);
  };

  const rightClick = (x: number, y: number, event: React.MouseEvent) => {
    const newUserInput: number[][] = JSON.parse(JSON.stringify(userInput));
    event.preventDefault(); // デフォルトの右クリックメニューを無効化
    console.log('Right click is triggered');
    if (userInput[y][x] !== 10) {
      newUserInput[y][x] = 10;
    } else {
      newUserInput[y][x] = -1;
    }
    setUserInput(newUserInput);
  };

  return (
    <div className={styles.container}>
      <div className={styles.board}>
        {board.map((row, y) =>
          row.map((color, x) => (
            <div
              className={styles.bomb}
              key={`${x}-${y}`}
              onClick={() => onClick(x, y)}
              style={{ backgroundPosition: color * -30 + 30 }}
            >
              {color === -1 && <div className={styles.stone} />}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
