// function palindrome(str){
//   var split = str.split('');
//   var reversed = str.split('').reverse()
//   console.log(split)
//   console.log(reversed)

//   for(var i=0;i<split.length;i++){
//     if(split[i]!=reversed[i]){
//       return "This is NOT a palindrome"
//     }else{
//       return "this IS a palindrome"
//     }
//   }
// }



function palindrome(str){
  var split = str.split('');

  for(var i=0;i<split.length;i++){
    if(split[i]!==split[split.length-1-i]){
      return "This is NOT a palindrome"
    }else{
      return "this IS a palindrome"
    }
  }
}

palindrome("racecar")
