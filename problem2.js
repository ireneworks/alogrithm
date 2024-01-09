// 3개의 인자를 받아 삼각형을 만들 수 있는지 boolean으로 표현
// 가장 큰 값이 무엇인지 알기 어렵고 결국 합이 큰지 확인해야하기 때문에 전체 합한 값에서 max를 빼서 비교
// Array from으로 변환해서 배열 메소드 활용하기

function solution(a, b, c) {
    const [max, ...rest] = Array.from(arguments).sort((a, b) => b - a)
    return max < rest.reduce((prev, cur) => prev + cur, 0)

}

console.log(solution(10, 4, 3))