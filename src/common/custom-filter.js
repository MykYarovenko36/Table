const regExp = (value) => new RegExp(value, 'gi');
const customFilter = (value) => (item) => item.title.match(regExp(value));

export default customFilter;