// 1. Counting Sheep

const countingSheep = function(num) {
    // Base case
    if (num === 0) {
        return 'All sheep jumped over the fence'
    }
    // General case
    const nextNum = num - 1
    return `${num}: Another sheep jumps over the fence  ` + countingSheep(nextNum)
}

let numOfSheep = 5
console.log(countingSheep(numOfSheep))

// 2. Power Calculator

function powCalc (base, exp) {
    // base case
    if (exp === 1) {
      return base
    }
    // general case
    const newExp = exp - 1
    return base * powCalc(base, newExp)
  }
  
  console.log(powCalc(10,4))

  // 3. Reverse String

  function strReversal(string) {
    const origStringArray = string.split("");
    const newStringArray = [];
    // base case
    if (origStringArray.length === 1) {
      return origStringArray
    }
    // general case
    const index = origStringArray.length - 1;
    const letter = origStringArray[index];
    return letter + strReversal(string.substring(0, string.length -1))
  }
  
  const revString = strReversal('hello')
  console.log(revString)
  console.log(typeof(revString))

  // 4. nth Triangular Number

  function triangularNum(n) {
    if (n === 1) {
      return 1
    }

    const newNum = n - 1;
    return n + triangularNum(newNum)
    
  }

  // Expect 21
  console.log(triangularNum(6))

  // Expect 28
  console.log(triangularNum(7))



  // 5. String Splitter

  function strSplitter(string, separator) {
    //base
    if (string.includes(separator) === false) {
      return [`${string}`]
    }
    // general
    const firstSeparator = string.indexOf(separator)
  
    const substring = string.substring(0,firstSeparator)
  
    const substringTwo = string.substring(firstSeparator+1, string.length)
  
    return ([`${substring}`].concat(strSplitter(substringTwo, separator)))
  }
  
  // Expect ["02", "20", "2020"]
  console.log(strSplitter('02/20/2020', '/'))
  // Expect [ 'Mel', 'An', 'Ie', 'Lee' ]
  console.log(strSplitter('Mel$An$Ie$Lee','$'))


  // 6. Fibonacci
  
  function fibSeries(count, precedingNumOne, precedingNumTwo) {

    // base 
    if (count === 2) {
      // push on the sum of the last 2 numbers in the series
      const finalNum = precedingNumOne + precedingNumTwo
      return precedingNumTwo + ` ${finalNum}`
    } 
  
    let fibNum = precedingNumOne + precedingNumTwo;
    
    // console.log(fibNum)
    return `${precedingNumTwo} ` + (fibSeries(count - 1, precedingNumTwo, fibNum))
    
  }
  
  // Expect: 1, 1, 2, 3, 5, 8, 13, 21, 34
  console.log(fibSeries(9, 0, 1))


// 7. Factorial

function generateFactorial(num) {
    //base
    if (num === 1) {
      return 1
    }
    //general
    return num * generateFactorial(num - 1)
  }
  
  // Expect 40320 
  console.log(generateFactorial(8))



// 8. Find a way out of the maze

function mazeEscape (maze, i=0, j=0) {
    // base case - at the exit
    if (maze[i][j] === 'e') {
      return '';
    }
  
    // general 
  
    let letter;
    if (maze[i][j+1] === ' ' || maze[i][j+1] === 'e') {
      j++;
      letter = 'R';
    }
    else if (maze[i+1][j] === ' ' || maze[i+1][j] === 'e') {
      i++;
      letter = 'D';
    }
    else {
      // go left until you hit an a blocked passage
      for (let counter = j; counter > 0; counter--) {
        if (letter) {
          letter = letter + 'L';
        } else {
          letter = 'L';
        }
        j--;
      }
      i++;
      return letter + 'D' + mazeSolver(maze, i, j);
    }
    return letter + mazeEscape(maze, i, j)
  }
  
  let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
  ];
  
  let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    [' ', '*', ' ', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
  ];

  console.log(mazeEscape(mySmallMaze))
  console.log(mazeEscape(maze));

  
  // Could not solve 9 - 12 copied from github - need to revisit and implement myself

  // 9. Find ALL the ways out of the maze
  
  // Use the above maze and modify your solution so it finds All the possible 
  // exit paths through the Maze. To find all possible exit paths through the maze, 
  // think about how many places you can move at each turn. Possibly up, down, left or right?

  // Notice that this maze has 3 exits paths. Your recursive function should print all three of the paths with the proper directions. For example, given the maze above, the program should output the following:
  
  // Path to the exit: RRDDLLDDRRRRRR
  // Path to the exit: RRDDRRUURRDDDD
  // Path to the exit: RRDDRRRRDD


  // const findAllWaysOutOfMaze = (maze, validPaths, winningPaths) => {
  //   // Setup defaults
  //   validPaths = validPaths || [
  //     { path: [], location: [0,0], prevLocations: [] }
  //   ];
  //   winningPaths = winningPaths || [];
  
  //   // Base Case
  //   if ( validPaths.length === 0 ) { 
  //     return (
  //       winningPaths.map(path => 
  //         "Path to the exit: " + path.path.join('')
  //       ).join('\n')
  //     );
  //   };
  
  //   // Helper function to determine if location was visited
  //   const checkPrevMoves = (prevLocations, newLocation) => {
  //     let valid = true;
  //     prevLocations.map(loc => {
  //       if ( loc[0] === newLocation[0] && loc[1] === newLocation[1] ) valid = false;
  //     });
  //     return valid;
  //   };
  
  //   // Helper function to determine a win
  //   const checkWin = (location, winLocation) => {
  //     return location[0] === winLocation[0] && location[1] === winLocation[1];
  //   };
  
  //   // Collect new valid paths
  //   const newValidPaths = [];
    
  //   validPaths.map(path => {
  //     let locRow = path.location[0];
  //     let locCol = path.location[1];
  //     if ( checkWin(path.location, [maze.length - 1, maze[0].length - 1]) ) {
  //       winningPaths.push(path);
  //     } else {
  //       // Handle right cases
  //       if ( 
  //         locCol + 1 < maze[0].length &&
  //         maze[locRow][locCol + 1] !== '*' &&
  //         checkPrevMoves(path.prevLocations, [locRow, locCol + 1])
  //       ){
  //         newValidPaths.push({
  //           path: [...path.path, "R"],
  //           location: [locRow, locCol + 1],
  //           prevLocations: [...path.prevLocations, path.location]
  //         })
  //       }
  //       // Handle down cases
  //       if ( 
  //         locRow + 1 < maze.length &&
  //         maze[locRow + 1][locCol] !== '*' &&
  //         checkPrevMoves(path.prevLocations, [locRow + 1, locCol])
  //       ){
  //         newValidPaths.push({
  //           path: [...path.path, "D"],
  //           location: [locRow + 1, locCol],
  //           prevLocations: [...path.prevLocations, path.location]
  //         })
  //       }
  //       // Handle left cases
  //       if ( 
  //         locCol - 1 >= 0 &&
  //         maze[locRow][locCol - 1] !== '*' &&
  //         checkPrevMoves(path.prevLocations, [locRow, locCol - 1])
          
  //       ){
  //         newValidPaths.push({
  //           path: [...path.path, "L"],
  //           location: [locRow, locCol - 1],
  //           prevLocations: [...path.prevLocations, path.location]
  //         })
  //       }
  //       // Handle up cases
  //       if ( 
  //         locRow - 1 >= 0 &&
  //         maze[locRow - 1][locCol] !== '*' &&
  //         checkPrevMoves(path.prevLocations, [locRow - 1, locCol])
  //       ){
  //         newValidPaths.push({
  //           path: [...path.path, "U"],
  //           location: [locRow - 1, locCol],
  //           prevLocations: [...path.prevLocations, path.location]
  //         })
  //       }
  //     }
  //   });
  //   return findAllWaysOutOfMaze(maze, newValidPaths, winningPaths);
  // };




// 10. Anagrams
// An anagram is any word or phrase that uses the letters of a given 
// ("subject") word or phrase in another, rearranged order. Write a 
// function that creates an anagram list, listing all the rearrangements 
// of a given word. For example, if the user types "east", the program 
// should list all 24 permutations, including "eats", "etas", "teas", and non-words like "tsae".

// Hint: For your algorithm, you might want to think about a prefix and use that to 
// create the new words. For example, given "east", use "e" as a prefix and place it in 
// front of all 6 permutations of "ast" — "ast", "ats", "sat", "sta", "tas", and "tsa". 
// This will give you the words "east", "eats", "esat", "esta", "etas", and "etsa". 
// Continue this way until you find all the anagrams for "east". Then you can use "a" 
// as a prefix and permute the remaining words "est". For "east", there should be 24 words.


// const anagrams = (string) => {
//   const combos = {};

//   const options = (prefix, remaining) => {
//     // Base case
//     if (!remaining.length) {
//       combos[prefix] = '';
//       return;
//     }

//     // General case
//     for (let i=0; i < remaining.length; i++) {
//       options(prefix + remaining.charAt(i), remaining.slice(0, i) + remaining.slice(i + 1));
//     }
//   };

//   options('', string);
//   return Object.keys(combos).join('\n');
// };


// // Expect output to contain all 24 anagrams
// console.log(anagrams('east'))



// 12. 11. Organization Chart
// Write a recursive function that prints the following organization chart. 
// Your output should be as shown below with proper indentation to show the hierarchy. 
// You may store the org chart in an object and send that as an input to your program.

// function orgChartCreator (orgChart) {
//     let results = [];

//     // General case
//     for (let member in orgChart) {
//       results.push(member);
//       if ( typeof orgChart[member] === "object") {
//         let subs = orgChartCreator(orgChart[member]);
//         results = results.concat(subs.map(sub => {
//           return "      " + sub;
//         }))
//       }
//     }

//     return results;
// }



// // 12. 12. Binary Representation
// Write a recursive function that prints out the binary representation 
// of a given number. For example, the program should take 3 as an input 
// and print 11 as output, or 25 as an input and print 11001 as an output. 
// // Note that the binary representation of 0 should be 0.

// function binRep(num) {
//   if (num === 0) {
//     return '0';
//   }

//   let dividedNum = Math.floor(num/2);
//   let remainder = num % 2;
//   if (dividedNum === 0) {
//     return `${remainder}`
//   }
//   return binRep(dividedNum) + remainder.toString();
// }

// // Expected output 11
// console.log(binRep(3))
// // Expected output 11001
// console.log(binRep(25))