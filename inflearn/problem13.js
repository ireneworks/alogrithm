// 13번 가운데 문자열 출력, 짝수면 가운데 2개 출력

function solution(str) {
    const index = Math.floor(str.length / 2);
    const isOdd = str.length % 2;

    if (isOdd) {
        return str.substring(index, index + 1)
    }
    return str.substring(index - 1, index + 1)
}

console.log(solution('teacher'))