// const arrayNumber = [-1, -4, 0, 1, 2, 3];
const arrayNumber = [-4, 3, -9, 0, 4, 1];
// const arrayNumber = [1, 2, 3, -1, -2, -3, 0, 0];

const ActionType = {
    minus: "minus",
    zero: "zero",
    plus: "plus"
};

const cekFilter = (nums, type) => {
    if (type === ActionType.minus) {
        return nums.filter(ar => {
            if (ar < 0) {
                return ar;
            }

        });
    }

    if (type === ActionType.zero) {
        return nums.filter(ar => {
            if (ar === 0) {
                return ar + 1;
            }
        });
    }

    if (type === ActionType.plus) {
        return nums.filter(ar => {
            if (ar > 0) {
                return ar;
            }
        });
    }
};

function plusMinus(arr) {
    let nilaiArray = [];

    const plus = cekFilter(arr, ActionType.plus);
    const minus = cekFilter(arr, ActionType.minus);
    const zero = cekFilter(arr, ActionType.zero);

    nilaiArray[0] = (plus.length / arr.length).toFixed(6);
    nilaiArray[1] = (minus.length / arr.length).toFixed(6);
    nilaiArray[2] = (zero.length / arr.length).toFixed(6);

    nilaiArray.forEach(ar => {
        console.log(ar);
    })
}

plusMinus(arrayNumber);