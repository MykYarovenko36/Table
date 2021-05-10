const ALPHABET = 'alphabet';
const ALPHABET_REVERSE = 'alphabet-reverse';
const DEFAULT = 'default';


const alphabetSorting = (a, b) => {
    if (a.title > b.title) {
        return 1;
    }
    if (a.title < b.title) {
        return -1;
    }
    return 0;
};

const alphabetReverseSorting = (a, b) => {
    if (a.title < b.title) {
        return 1;
    }
    if (a.title > b.title) {
        return -1;
    }
    return 0;
};

const customSorting = (value, arr) => {
    switch(value) {
        case ALPHABET :
            return [...arr].sort(alphabetSorting);
        case ALPHABET_REVERSE : 
            return [...arr].sort(alphabetReverseSorting);
        case DEFAULT : 
            return [...arr];
        default: return arr;
    }
};

export default customSorting;