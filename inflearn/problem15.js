// 15번 중복 원소 제거

function solution(arr) {
    const result = [];

    for(let i = 0; i < arr.length; i++) {
        if(arr.indexOf(arr[i]) === i) {
            result.push(arr[i])
        }
    }
    return result;
}

console.log(solution(["pocket", "kitchen", "pocket", "kitchen", "snoopy"]))