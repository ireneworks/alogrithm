function getBinary(target) {
    let result = '';

    while(target > 0) {
        result = (target % 2) + result;
        target = Math.floor(target / 2);
    }
    return result;
}

function solution(target) {
    const str = getBinary(target);
    let result = 0;

    for(const node of str) {
      if(node === '1') {
          result ++
      }
    }
    return result;
}

console.log(solution(11))