
function solution (n) {
    let result = 0;

    while(n > 0) {
        n -= 12;
        result ++;
    }
    return result;
}


console.log(solution(13))