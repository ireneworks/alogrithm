// 5번 받는 인자 중에서 홀수들의 합을 구하고 그 홀수들 중에서 최솟값을 구하라

function solution (arr) {
    // 인자를 ASC 정렬
    arr.sort((a, b) => a - b)
    const odds = arr.filter((value) => value % 2);

    console.log(odds.reduce((a, b) => a + b, 0))
    console.log(odds[0])
}

console.log(solution([12, 77, 38, 41, 53, 92, 85]));