import { legalMove } from './kt-api.js'

const grids = document.querySelectorAll('td');
let knightElement = document.getElementsByClassName('knight');

export const onContentLoaded = async () => {
  const initialMove = [0, 0]

  // const result1 = await legalMove(initialMove, [1,2])
  // const result2 = await legalMove(initialMove, [2,4])
  // console.log(`From: [${initialMove}] to [1, 2], legal: ${result1}`)
  // console.log(`From: [${initialMove}] to [2, 4], legal: ${result2}`)

  let currPos = initialMove;

  grids.forEach(grid => {
      grid.addEventListener('click', async (event) => {
        console.log('click event', event)
        console.log('knight ele: ', knightElement);
        let knightPosY = Number(knightElement[0].className.split(' ')[0]);
        let knightPosX = Number(knightElement[0].parentElement.className);
        console.log('knight position X: ', knightPosX);
        console.log('knight position Y: ', knightPosY);
        const moveY = Number(event.target.className.split(' ')[0]);
        const moveX = Number(event.target.parentElement.className);
        // const isValid = await legalMove(currPos, [moveX, moveY]);
        const isValid = legalMove(currPos, [moveX, moveY])
        console.log('move valid? ', isValid);
        if (isValid) {
          currPos = [moveX, moveY];
        }
      })
  });
}


document.addEventListener('DOMContentLoaded', onContentLoaded)
