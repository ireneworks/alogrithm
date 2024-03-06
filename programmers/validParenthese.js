function solution(str) {
    // ')' 시작하면 무조건 false
    if(str[0] === ')') {
        return false;
    }

    const answer = [];
    for(const node of str) {
        // '(' 이면 넣기
        if(node === '(') {
            answer.push(node)
        } else {
            // '(' 이면 빼기
            answer.pop();
        }
    }
    // 총 개수가 0이면 모든 짝이 맞음
    return answer.length === 0;
}

console.log(solution('(()))('))