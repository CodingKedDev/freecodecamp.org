//and then import it like so:
// An ECMAScript module

// import statement
// export statement

 export function getGrade(score) {
  if(score === 100){
    return "A++"
  }else if(score >=90){
    return "A"
  }else if(score >=80){
    return "B"
  }else if(score >=70){
    return "C"
  }else if(score >=60){
    return "D"
  }else {
    return "F"
  }

}

console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));

// export default getGrade(score)