// const a = [
//     [1, 1, 1, 0, 0, 0],
//     [0, 1, 0, 0, 0, 0],
//     [1, 1, 1, 0, 0, 0],
//     [0, 0, 2, 4, 4, 0],
//     [0, 0, 0, 2, 0, 0],
//     [0, 0, 1, 2, 4, 0],
// ];

const a = [
    [-1, -1, 0, -9, -2, -2],
    [-2, -1, -6, -8, -2, -5],
    [-1, -1, -1, -2, -3, -4],
    [-1, -9, -2, -4, -4, -5],
    [-7, -3, -3, -2, -9, -9],
    [-1, -3, -1, -2, -4, -5]
];

function hourglassSum(arr) {
    const y = arr.length - 2;
    const x = arr[0].length - 2;
    let maxSum = 0;
    let maxSumTemp = 0;
    let count = 0;

    if (y < 3 || x < 3) return false;

    for (let i = 0; i < x; i++) {
        for (let j = 0; j < y; j++) {
            maxSum = (arr[i][j] + arr[i][j+1] + arr[i][j+2]) +
                (arr[i+1][j+1]) +
                (arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]);

            count += 1;
            if(count === 1) {
                maxSumTemp = maxSum;
            }

            if (maxSum > maxSumTemp) {
                maxSumTemp = maxSum;
            } else {
                maxSum = maxSumTemp;
            }
        }
    }

    return maxSum;
}


console.log(hourglassSum(a));