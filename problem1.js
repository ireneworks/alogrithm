// Math.min을 사용해서
// arguments를 이용하여 이터러블 객체를 활용한다
function solution(a, b, c) {
    let result = arguments[0];

    for(let i = 0; i < arguments.length; i++) {
        if(result >= arguments[i]) {
            result = arguments[i];
        }
    }
    return result
}


function solution2(arr) {
    let result = arr[0];

    for(let i = 0; i < arr.length - 1; i++) {
        if(result >= arr[i + 1]) {
            result = arr[i + 1]
        }
    }
    return result;
}

console.log(solution(6, 5, 3))
console.log(solution2([12, 100, 23, 8, 32, 7]))