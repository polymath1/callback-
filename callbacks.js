
function findWaldo(arr, found){
      arr.forEach(function(element) {
          if (element === "Waldo"){
              found(arr.indexOf(element));
          }
      })
  }

function actionWhenFound(element){
    console.log("Found waldo at index " + element)
}

findWaldo(["Alice" , "Bob" , "Waldo", "Winston"], actionWhenFound)
