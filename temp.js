const fun  = (range) => {
  let mainArr = [];
  for(let i=0; i<range; i++){
    let newArr = [];
    if(i===0) newArr = [1]
    if(i===1) newArr = [1,1]
    if(i > 1){
      for(let j=0; j<mainArr.length-1; j++){
        newArr = [...newArr, mainArr[j] + mainArr[j+1]]
      }
      newArr = [1,...newArr,1]
    }
    mainArr = newArr
    
    console.center(newArr.join(" "))
  }
}

fun(11);