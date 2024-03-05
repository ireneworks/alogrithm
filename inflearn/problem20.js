// 20번 점수대로 등수를 매겨 출력

function solution(arr) {
    const scores = [...arr].sort((a, b) => b - a);

    for(let i = 0; i < arr.length; i++) {
        const index = arr.indexOf(scores[i]);
        arr[index] = i + 1;
    }
    return arr;
}

function solution1(arr) {
    const result = [];

    for(let i = 0; i < arr.length; i++) {
        let leader = 1;

        for(let j = 0; j < arr.length; j++) {
            if(arr[j] > arr[i]) {
                leader++
            }
        }
        result.push(leader)
    }
    return result;
}

console.log(solution([87, 89, 92, 100, 76]))
console.log(solution1([87, 89, 92, 100, 76]))