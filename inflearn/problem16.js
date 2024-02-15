// 16번 배열로 받은 숫자들 중 바로 앞 숫자보다 큰 수만 출력

function solution(arr) {
    const result = [arr[0]];

    for(let i = 0; i < arr.length - 1; i++) {
        if(arr[i] < arr[i + 1]) {
            result.push(arr[i + 1])
        }
    }
    return result;
}

console.log(solution([7, 3, 9, 5, 6, 12]))