import axios from 'axios';
const idGenerator = () => {
  return new Date().getTime()
    .toString()
    .replace(/16/g, '3-e457')
    .replace(/7/g, '5-f24')
};

class TableService {
    __API = axios.create({
        baseURL: 'http://localhost:3001/',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        },
    });

    __postChecker = (data, type) => {
        if (type === 'post') {
          return { ...data, id: idGenerator(), date: new Date().getTime()}
        }
        if (type === 'patch') {
          return {...data, date: new Date().getTime()}
        }
        return;
    };

    getAll = () => {
        return this.__API.get('posts');
    };

    getItem = (id) => {
        return this.__API.get(`posts/${id}`);
    };

    deleteItem = (id) => {
        return this.__API.delete(`posts/${id}`);
    };

    post = (data) => {
        return this.__API.post('posts', this.__postChecker(data, 'post'));
    };

    patch = (data) => {
        console.log(this.__postChecker(data, 'patch'));
        return this.__API.patch(`posts/${data.id}`, this.__postChecker(data, 'patch'));
    };

}

export default TableService;