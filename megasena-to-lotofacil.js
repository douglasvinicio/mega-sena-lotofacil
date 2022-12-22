// 'Lotofacil' bets numbers ranges from 1 to 25
// 'Mega Sena' bets numbers ranges from 1 to 60
// Program takes 18 numbers from 1 to 60 and transforms into a bet of 15 numbers ranging from 1 to 25. 

// Notes to dev :
// - Developing using for loops as training to junior code interviews
// - Used sort and filter for the sake of verbose
// - If the final array doesn't have a a total of 15 numbers it generated a random number from 1 to 25 that is not already on the array. 

// Linkedin Post :
// Changing careers and job hunting in tech is not always evident, but following advice from some senior developers that I met since I'm involved in the community I started to search for simple small projects to help people around me and use real world examples to develop a tool. It hits different than following a tutorial or a course of how to create xyz application using this tool. Here you're creating something totally new, off course it will have research and ctrl+c ctrl+v from you know overflow but still you will have to think on not just how to solve a unique problem but also how to approach it to save time and resources, a bit of project management since you can face it as something serious worth of a place on your portfolio or an live app that you can brag about when asked what you do for a living.   
// Took a real case scenario from a task given to me from my mother, instead of doing by hand I decided to use my coding skills to automate and reduce margin to error

const firstBet = [03 ,13, 29, 34, 35, 27]
const secondBet = [08 ,18, 28, 37, 42, 53]
const thirdBet = [01 ,02, 05, 04, 06, 07]


// Generates an integer ranging from min to max
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Takes 3 arrays of 6 numbers ranging from 1 to 60 and transform into a new array of 15 numbers from 1 to 25
function makeOneGame(gameOne, gameTwo, gameThree) {
    
    let  newBet = [];  
  
    for (let i = 0; i < gameOne.length ; i++) {
    newBet[i] = gameOne[i];        
  }

  for(let j = 0; j < gameTwo.length; j++) {
    newBet[gameOne.length + j] = gameTwo[j];
  }

  for(let k = 0; k < gameThree.length; k++) {     
    newBet[gameOne.length + gameTwo.length + k] = gameThree[k];
  }

  //Removes duplicates
  let betNumbers = [...new Set(newBet)]

  // Removes numbers above 25
  let filteredBetNumbers = betNumbers.filter(number => number < 25);

  // console.log(filteredBetNumbers)

  if ( filteredBetNumbers.length < 15 ) {
    let rdnToBeCreated = 15 - filteredBetNumbers.length;
  
    for (let i = 0; i < rdnToBeCreated ; i++) {
      let randomNumber = getRndInteger(1,25);      
      filteredBetNumbers.indexOf(randomNumber) === -1 ? filteredBetNumbers.push(randomNumber) : i--;  //An alternative for 'recursion' i--    
    }
    
    // Returns a final array with 15 numbers sorted from least to greatest.  
    return filteredBetNumbers.sort(function( a , b){
      if(a > b) return 1;
      if(a < b) return -1;
      return 0;
    });
  }

}

console.log(makeOneGame(firstBet, secondBet, thirdBet));