// http://knights-t.herokuapp.com/

/*
Welcome to Knights Tour.


Endpoints: 
/

This documentation


/legalMove

Post Endpoint

Request:

row and col are integers between 0 and 7 inclusive.
{ from: [col, row], to: [col, row] }

Response

{ from: [col, row], to: [col, row], isLegal: true/false }



Sample:
Request:
{ "from": [0, 0], "to": [3, 5] }

Response:
{ "status": "ok", "from": [ 0, 0 ], "to": [ 3, 5 ], "isLegal": false }
*/
// export async function legalMove(from, to) {
//   const response = await axios.post(
//     'http://knights-t.herokuapp.com/legalMove',
//     {
//       from,
//       to
//     },
//     {
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     }
//   )
  
//   return response.data.isLegal
// }

export function isLegal(from, to, piece) {
  return validationMap[piece](from, to);
}

const validationMap = {
  'knight': validateKnight,
  'bishop': validateBishop
}

function validateBishop(from, to) {
  console.log('from: ', from);
  console.log('move to', to);
  const [x1, y1] = from;
  const [x2, y2] = to;
  // 3 situations:
  // cannot be horizontal or vertical
  // x1-x2 = y1-y2
  if (x1===x2 || y1===y2) {
    return false;
  }
  else if (Math.abs(x1-x2) === Math.abs(y1-y2)) {
    return true;
  }
  return false;
}

function validateKnight(from, to) {
  const [x1, y1] = from;
  const [x2, y2] = to;
  // two situations are valid: 
  // |X1 - X2| = 1 AND |Y1-Y2| = 2
  // or
  // |X1 - X2| = 2 AND |Y1-Y2| = 1
  if (Math.abs(x1-x2) === 1 && Math.abs(y1-y2) === 2) {
    return true;
  }
  else if (Math.abs(x1-x2) === 2 && Math.abs(y1-y2) === 1) {
    return true;
  }
  return false;
}
