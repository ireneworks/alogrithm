// 2번 3개의 숫자를 인자로 받아 삼각형을 만들 수 있는지 여부를 boolean으로 표현하기
// 삼각형의 핵심은 가장 긴 변의 길이보다 다른 두변의 길이의 합이 커야 삼각형을 이룰 수 있음

function solution(a, b, c) {
    // 문제의 핵심은 삼각형을 만들지 있는 여부를 판단하는 것이기 때문에 sort를 활용해도 무방하다고 판단
    // arguments는 array가 아니므로 array 객체로 만들어주어야 함
    const [max, ...rest] = Array.from(arguments).sort((a, b) => b - a)
    return max < rest.reduce((prev, cur) => prev + cur, 0)
}


function solution2(a, b, c) {
    // sort를 사용하지 않는다면
    let max = arguments[0];

    for(const i of arguments) {
        if(i >= max) {
            max = i
        }
    }
    // 전체 arguments에서 어떤게 최댓값인지 모르기 때문에 total - max로 비교
    const total = a + b + c;
    return max < total - max
}

console.log(solution(10, 4, 3))
console.log(solution2(5, 4, 9))