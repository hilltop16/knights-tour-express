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
        let knightPosX = Number(knightElement[0].parentElement.id);
        let knightPosY = Number(knightElement[0].className.split(' ')[0]);
        console.log('knight position X: ', knightPosX);
        console.log('knight position Y: ', knightPosY);
        const moveX = Number(event.target.parentElement.id);
        const moveY = Number(event.target.className.split(' ')[0]);
        // const isValid = await legalMove(currPos, [moveX, moveY]);
        const isValid = legalMove(currPos, [moveX, moveY])
        console.log('move valid? ', isValid);
        if (isValid) {
          currPos = [moveX, moveY];
          knightElement[0].classList.remove('knight');
          event.target.classList.add('knight');
          // const row = currPos[0].toString();
          // const col = currPos[1].toString();
          // console.log('row Id: ', row);
          // const knightNewEle = document.getElementById(row);
          // console.log('knight new position: ', knightNewEle);
          // knightNewEle[0].classList.add('knight');
        }
      })
  });
}


document.addEventListener('DOMContentLoaded', onContentLoaded)
