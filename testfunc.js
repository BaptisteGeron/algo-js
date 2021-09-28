arr=[12, 32, 21, 9];
let arrSum = 0;

function average (arr) {
    for (let i=0; i<arr.length; i++){
      arrSum+= parseInt(arr[i]);
    }
    return (arrSum / parseInt(arr.length));
  }

  console.log(parseInt(average(arr)));