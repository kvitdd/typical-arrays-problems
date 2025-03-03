exports.min = function min(array) {
    if (array) {
        if (array.length === 0) return 0;
        return Math.min.apply(null, array);
    }
    return 0;
};

exports.max = function max(array) {
    if (array) {
        if (array.length == 0) {
            return 0;
        } else {
            return Math.max.apply(null, array);
        }
    }
    return 0;
};

exports.avg = function avg(array) {
    if (array) {
        let sum = 0;
        if (array.length == 0) {
            return 0;
        } else {
            for (let i = 0; i < array.length; i++) {
                sum += array[i];
            }
            return sum / array.length;
        }
    }
    return 0;
};
