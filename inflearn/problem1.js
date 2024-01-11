// 1번 인자로 받는 숫자들 중 최소값 찾기

function solution(a, b, c) {
    // arguments의 이터러블 객체를 활용
    let result = arguments[0];

    for(let i = 0; i < arguments.length; i++) {
        if(result >= arguments[i]) {
            result = arguments[i];
        }
    }
    return result
}

// 만약 array로 받는다면
function solution2(arr) {
    let result = arr[0];

    // for of 문은 이터러블 객체의 elements를 하나씩 호출
    for(const i of arr) {
        if(result >= arr[i + 1]) {
            result = arr[i + 1]
        }
    }
    return result;
}

console.log(solution(6, 5, 3))
console.log(solution2([12, 100, 23, 8, 32, 7]))