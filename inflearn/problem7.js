// 7번 arguments의 숫자 중 2개를 제외한 값이 100이하인 값을 찾아라

function solution(arr) {
    // 전체를 더한 값을 만듦
    const sum = arr.reduce((a, b) =>  a + b, 0);

    // arr에서 2개의 숫자를 제외하고 100이하인지 확인
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; i < arr.length; i++) {
            if((sum - (arr[i] + arr[j])) <= 100) {
                // 기존 arguments에서 제거
                arr.splice(i, 1);
                arr.splice(j, 1);
            }
        }
    }
    return arr;
}

console.log(solution([20, 7, 23, 19, 10, 15, 25, 8, 13]));