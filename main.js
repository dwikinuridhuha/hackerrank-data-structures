const alice = [12, 30, 1];
const bob = [1, 30, 9];

const checkSecore = (a, b) => {
    const result = [0, 0]; // alice, bob
    for (let i = 0; i < 3; i++) {
        if (a[i] > b[i]) {
            result[0] += 1;
        } else if(a[i] < b[i]) {
            result[1] += 1;
        } else {
            result[0,1] = result[0,1];
        }
    }

    return result;
};

console.log(checkSecore(alice, bob));
