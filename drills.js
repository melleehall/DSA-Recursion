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



  
