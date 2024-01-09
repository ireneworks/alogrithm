
function solution (day, arr) {
   let result = 0;

   for(let i of arr) {
       const digit = i % 10;
       if(digit === day) {
           result ++;
       }
   }
   return result
}


console.log(solution(3, [25, 23, 11, 47, 53, 17, 33]))