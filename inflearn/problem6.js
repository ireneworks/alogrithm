// 6번 한 자리수 날짜와 두자리 수의 마지막 일의 자리가 일치하는 것은 몇 개인가

function solution (day, arr) {
   let result = 0;

   for(let i of arr) {
       // 일의 자리를 분리하기 위해 10으로 나머지를 구함
       const digit = i % 10;
       if(digit === day) {
           result ++;
       }
   }
   return result
}


console.log(solution(3, [25, 23, 11, 47, 53, 17, 33]))