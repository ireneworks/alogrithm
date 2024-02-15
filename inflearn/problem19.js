// 19번 OX 문제에서 답을 맞춘 경우 1, 아니면 0이다. 답을 맞춘 경우 가산점이 1점씩 더 붙는다. 총 합을 구하라

function solution(arr) {
    let result = 0;
    let temp = 0;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === 1) {
            ++temp
            result += temp
        }
        else {
            temp = 0;
        }
    }
    return result;
}

console.log(solution([1, 0, 1, 1, 1, 0, 0, 1, 1, 0]))