// 14번 중복된 문자없이 한번만 출력될 수 있도록 중복 제거

function solution(str) {
    const arr = str.split('');
    const result = [arr[0]];

    for(let i = 0; i < arr.length; i++) {
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

console.log(solution('ksekkset'))
console.log(solution2('ksekkset'))