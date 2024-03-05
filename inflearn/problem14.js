// 14번 중복된 문자없이 한번만 출력될 수 있도록 중복 제거

function solution(str) {
    const arr = str.split('');
    const result = [arr[0]];

    for(let i = 0; i < arr.length; i++) {
        // some으로 전체를 돌아야하는 경우가 생길 수 있기에 복잡도를 높이는 방법인 듯
        const isAdded = result.some((value) => value === arr[i])
        if (!isAdded) {
            result.push(arr[i])
        }
    }
    return result.join('');
}

function solution2(str) {
    let result = '';

    for(let i = 0; i < str.length; i++) {
        // indexOf로 가장 첫번째 매칭을 찾기 때문에 인덱스 불일치로 판별
        if(str.indexOf(str[i]) === i) {
            result += str[i];
        }
    }
    return result;
}

function solution3(str) {
    const result = [str[0]];

    for(let i = 0; i < str.length; i++) {
        // 앞뒤로만 판별하면 되기에 가장 효율적일 듯
        if(answer[answer.length - 1] !== str[i]) {
            result.push(str[i])
        }
    }
    return answer;
}

console.log(solution('ksekkset'))
console.log(solution2('ksekkset'))
console.log(solution2('ksekkset'))