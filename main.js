
function  divisibilityTest(i) {
    if(i % 5 === 0 && i % 3 === 0){
      return `${i} fuzzbuzz`
    }
    else if(i % 5 === 0){
      return `${i} buzz`
    }
    else if(i % 3 === 0){
      return `${i} fuzz`
    }
    else{
      return `${i}`
    }
  }

  for(let num=1;num<=100;num++){
   console.log(divisibilityTest(num));
  }

module.exports = {divisibilityTest}