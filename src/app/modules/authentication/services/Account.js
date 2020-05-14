import Axios from 'axios';

export class Account {
    login(data) {
        return Axios.post('/tokens', data);
    }
}