//and then import it like so:
// An ECMAScript module

// import statement
// export statement
// import * as gradeScore from './building-a-gradebook-app.js'





function getGrade(score) {
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


function hasPassingGrade(score) {
  return getGrade(score) !== "F"
}


// console.log(hasPassingGrade(100));
// console.log(hasPassingGrade(53));
// console.log(hasPassingGrade(87));




function studentMsg(totalScores, studentScore) {
  const letterGrade = getGrade(studentScore)
  let courseResult = "You passed the course."
  if(!hasPassingGrade(letterGrade)){
    courseResult = "You failed the course."
}
return "Class average:" + getAverage(totalScores) + ". Your grade: " + letterGrade + ". " + courseResult
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));