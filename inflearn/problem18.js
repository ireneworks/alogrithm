// 18번 A와 B가 가위바위보를 해서 이긴 사람을 출력

function solution(a, b) {
    const result = [];

    for(let i = 0; i < a.length; i++) {
        // 비기는 경우
        if(a[i] === b[i]) {
            result.push('D')
        }
        // 이후는 모두 A가 이기는 케이스를 판별
        else if(a[i] === 1 && b[i] === 3) {
            result.push('A')
        }
        else if(a[i] === 2 && b[i] === 1) {
            result.push('A')
        }
        else if(a[i] === 3 && b[i] === 2) {
            result.push('A')
        }
        // 그 외는 모두 B가 승리
        else result.push('B')
    }
    return result;
}


console.log(solution([2, 3, 3, 1, 3], [1, 1, 2, 2, 3]))