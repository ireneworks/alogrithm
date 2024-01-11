// 4번 인자로 받는 숫자까지의 합 구하기

function solution (n) {
    let result = 0;
    for(let i = 1; i <= n; i++) {
        result += i;
    }
    return result
}

// 등차수열 합
// 엄청 큰 숫자를 고려한다면 for 문을 돌리는 것 보다 빠를 것으로 예상됨
function solution2(n) {
    return n * (n + 1) / 2
}

console.log(solution(10))
console.log(solution2(10))