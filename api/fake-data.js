const faker = require('faker');
const makeRandom = (arr) => {
  return Array.isArray(arr)? arr[Math.floor(Math.random() * arr.length)] : 
    Math.floor(Math.random() * 10);
};

const itemGenerate = () => {
  const gender = makeRandom(['male', 'female']);
  return {
    id: `${faker.datatype.uuid()}`,
    createdBy: `${faker.name.firstName(gender)} ${faker.name.lastName()}`,
    date: `${faker.date.past(2).getTime()}`,
    title: `${faker.lorem.sentence()}`,
    note: `${faker.lorem.paragraph()}` 
  }
}
module.exports = Array.from(Array(50).keys()).map(itemGenerate);
