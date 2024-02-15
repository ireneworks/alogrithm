// 17번 해당 순서대로 섰을때 보이는 사람은 몇 명인가

function solution(arr) {
    // 지금까지의 가장 큰 키를 저장
    let temp = 0;
    let result = 0;

    for(let i = 0; i < arr.length; i++) {
        // 동일하면 보이지 않기 때문에 무조건 큰 결과만 반영
        if(temp < arr[i]) {
            temp = arr[i]
            result++
        }
    }
    return result;
}

console.log(solution([130, 135, 148, 140, 145, 150, 150, 153]))