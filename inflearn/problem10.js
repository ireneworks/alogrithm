// 10번 문자열에서 대문자가 몇 개인가

function solution(str) {
   return str.split(/[A-Z]/).length - 1
}

function solution1(str) {
    let answer = 0;

    for(let i of str) {
        if(i === i.toUpperCase()) {
            answer++
        }
    }
    return answer;
}

console.log(solution('HelloMochi'));
console.log(solution1('HelloMochi'));