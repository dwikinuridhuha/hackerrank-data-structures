const arr = [[1,2,3], [4,5,6], [9,8,9]];

function diagonalDifference(arr) {
    // Write your code here
    let diagonal_1 = [],
        diagonal_2 = [],
        total = 0,
        total_1 = 0,
        total_2 = 0,
        arrIndex = 0,
        panjangArr = arr.length - 1;

    for(arrIndex in arr) {
        diagonal_1[arrIndex] = arr[arrIndex][arrIndex];
    }

    for(arrIndex in arr) {
        diagonal_2[arrIndex] = arr[arrIndex][panjangArr - arrIndex];
    }

    total_1 = diagonal_1.reduce((total, num) => {
        return total + num;
    }, 0);

    total_2 = diagonal_2.reduce((total, num) => {
        return total + num;
    }, 0);

    // console.log(diagonal_1);
    // console.log(diagonal_2);
    //
    // console.log(total_1);
    // console.log(total_2);

    total = Math.abs(total_1 - total_2);

    return total;
}

console.log(diagonalDifference(arr));
