// 9번 문자열에서 주어진 값의 개수를 출력

function solution(str, node) {
    let result = 0;

    for(let i of str) {
        if(i === node) {
            result++
        }
    }
    return result;
}

function solution1(str, node) {
    // 특정 문자열로 분리
    return str.split(node).length - 1;
}

console.log(solution('COMPUTERPROGRAMMING', 'R'));
console.log(solution1('COMPUTERPROGRAMMING', 'R'));