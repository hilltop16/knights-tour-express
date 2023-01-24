import { legalMove } from './kt-api.js'

const grids = document.querySelectorAll('td');

export const onContentLoaded = async () => {
  const initialMove = [0, 0]

  // const result1 = await legalMove(initialMove, [1,2])
  // const result2 = await legalMove(initialMove, [2,4])
  // console.log(`From: [${initialMove}] to [1, 2], legal: ${result1}`)
  // console.log(`From: [${initialMove}] to [2, 4], legal: ${result2}`)

  let currPos = initialMove;

  grids.forEach(grid => {
      grid.addEventListener('click', async (event) => {
        console.log('event', event)
        const moveY = event.target.className.split(' ')[0];
        const moveX = event.target.parentElement.className;
        // const isValid = await legalMove(currPos, [moveX, moveY]);
        const isValid = legalMove(currPos, [moveX, moveY])
        console.log('move valid? ', isValid);
        if (isValid) currPos = [moveX, moveY];
      })
  });
}


document.addEventListener('DOMContentLoaded', onContentLoaded)
