// import { legalMove } from './kt-api.js'
import { isLegal } from "./kt-api.js";

const grids = document.querySelectorAll('td');
let knightElement = document.getElementsByClassName('knight');
let bishopElement = document.getElementsByClassName('bishop');

export const onContentLoaded = async () => {
  // const initialMove = [0, 0]

  // const result1 = await legalMove(initialMove, [1,2])
  // const result2 = await legalMove(initialMove, [2,4])
  // console.log(`From: [${initialMove}] to [1, 2], legal: ${result1}`)
  // console.log(`From: [${initialMove}] to [2, 4], legal: ${result2}`)

  // let currPos = initialMove;
  let currPos;

  grids.forEach(grid => {
      grid.addEventListener('click', async (event) => {
        // let knightPosX = Number(knightElement[0].parentElement.id);
        // let knightPosY = Number(knightElement[0].className.split(' ')[0]);
        // console.log('knight position X: ', knightPosX);
        // console.log('knight position Y: ', knightPosY);
        const piece = 'knight';
        const pieceEle = document.getElementsByClassName(piece);
        const posToX = Number(event.target.parentElement.id);
        const posToY = Number(event.target.className.split(' ')[0]);
        // const isValid = await legalMove(currPos, [posToX, posToY]);
        currPos = getPosition(pieceEle);
        const isValid = isLegal(currPos, [posToX, posToY], piece);
        console.log('move valid? ', isValid);
        if (isValid) {
          currPos = [posToX, posToY];
          toggleClass(event, pieceEle, piece)
        }
        else alert(`Invalid ${piece} move!`);
      })
  });
}

const getPosition = (element) => {
  let currPosX = Number(element[0].parentElement.id);
  let currPosY = Number(element[0].className.split(' ')[0]);
  return [currPosX, currPosY];
}

const toggleClass = (event, element, piece) => {
  element[0].classList.remove(piece);
  event.target.classList.add(piece);
}

document.addEventListener('DOMContentLoaded', onContentLoaded)
