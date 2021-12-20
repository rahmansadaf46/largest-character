/**Largest Character*/
function largestCharacter (data) {
    let largestChar = '';
    let currentChar = '';
    for(let i = 0; i < data.length; i++){
       if(currentChar[0] !== data[i]){
        currentChar = data[i];
       } else {
        currentChar += data[i];
       }
       if(currentChar.length > largestChar.length){
        largestChar = currentChar;
       }
    }
    return largestChar;
  }

var result = largestCharacter('aanyyeeeddk');
console.log(result);


