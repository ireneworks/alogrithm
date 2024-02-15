// 8번 A를 #으로 모두 바꿔라

function solution(str) {
    const arr = str.split('');

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === 'A') {
            arr[i] = '#'
        }
    }
    return arr.join('');
}

function solution1(str) {
    return str.replace(/A/g, '#');
}

console.log(solution('BANANA'));
console.log(solution1('BANANA'));