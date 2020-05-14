import Axios from 'axios';

export default class Account {
    static async login(data) {
        return Axios.get('/entities/test');
    }
}