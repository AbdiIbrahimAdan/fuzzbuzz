


function  divisibilityTest(j) {
    if(j % 5 === 0 && j % 3 === 0){
      return `${j} fuzzbuzz`
    }
    else if(j % 5 === 0){
      return `${j} buzz`
    }
    else if(j % 3 === 0){
      return `${j} fuzz`
    }
    else{
      return `${j}`
    }
  }
  for(let index = 1; index <= 100; index++){
    console.log(divisibilityTest(index));
   }

module.exports = {divisibilityTest}