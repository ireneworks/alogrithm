// 12번 가장 긴 문자열을 출력하라

function solution(arr) {
   let result = '';

   for(let i of arr) {
       if(result.length <= i.length) {
           result = i;
       }
   }
   return result;
}

console.log(solution(['teacher', 'lime', 'snoopy', 'orange', 'red']));