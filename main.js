const ar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];

function aVeryBigSum(ar) {
    // Write your code here
    let bigAr = [];
    ar.forEach((nilai, index) => {
        bigAr[index] = BigInt(nilai);
    });

    return bigAr.reduce((total, num) => {
        return  BigInt(total) + num;
    }, 0);
}


console.log(aVeryBigSum(ar));
