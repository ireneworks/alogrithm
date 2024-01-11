// 3번 1다스에 12자루 들은 연필을 n명에게 나누어주려면 몇 다스가 필요한가?

function solution (n) {
    let result = 0;

    // 12씩 가능한 만큼 빼기
    while(n > 0) {
        n -= 12;
        result ++;
    }
    return result;
}

// n / 12, n % 12가 반복되는 것 같고 좋은 방법은 아닌듯
function solution2(n) {
    const result = Math.floor(n / 12);
    return n % 12 ? result + 1 : result
}

console.log(solution(13))
console.log(solution2(17))
