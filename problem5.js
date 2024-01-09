// arr를 ASC
// 홀수의 합
// 홀수 중 가장 최솟값

function solution (arr) {
    const odds = arr.filter((value) => value % 2)
    const [min, ...rest] = odds.sort((a, b) => a - b);

    console.log(odds.reduce((a, b) => a + b, 0))
    console.log(min)
}

console.log(solution([12, 77, 38, 41, 53, 92, 85]));