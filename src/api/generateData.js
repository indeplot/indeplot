import _ from 'lodash';
const UPPER_LIMIT = 100;
const LOWER_LIMIT = -100;
const MAX_COUNT = 10;
const X_AXIS = 'SampleX';

/**
 * 
 * @param {number} upperLimit 
 * @param {number} lowertLimit 
 * @param {object} options
 * @property {boolean} options.floating - Whether or not to include floating numbers
 * @property {number} options.count - Total number of data points to display
 * @returns {data, labels}
 */
export default function generateData(upperLimit, lowertLimit, options) {
    let index = 1;
    const data = [], labels = [];
    const { floating, count } = options;
    if (upperLimit > UPPER_LIMIT || lowertLimit < LOWER_LIMIT) throw new Error(`Limit should be in range of ${LOWER_LIMIT} to ${UPPER_LIMIT}`);
    if (count > MAX_COUNT) throw new Error(`Number of data points can not be more than ${MAX_COUNT}`);
    while (index <= count) {
        const num = _.random(upperLimit, lowertLimit, floating);
        data.push(num);
        labels.push(X_AXIS + index);
        index++;
    }
    return { data, labels };
}