// 21번 행, 열, 대각선 중 가장 큰 합을 출력

function solution(arr) {
   const result = [];
    let row, column, diagnol1, diagnol2;

    for(let i = 0; i < arr.length; i++) {
        row = 0;
        column = 0;
        diagnol1 = 0;
        diagnol2 = 0;

       for(let j = 0; j < arr.length; j++) {
          row += arr[i][j];
          column += arr[j][i];
       }

       diagnol1 += arr[i][i];
       diagnol2 += arr[i][n - i - 1];
       result.push(row, column)
    }
    return Math.max(...result);
}

console.log(solution([[10, 13, 10, 12, 15], [12, 39, 30, 23, 11], [11, 25, 50, 53, 15], [19, 27, 29, 37, 27], [19, 13, 30, 13, 19]]))