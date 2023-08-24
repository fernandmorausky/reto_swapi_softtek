import axios from 'axios';

export default class Http {
    async get<T>(resource: string): Promise<T> {
        const res = await axios.get<T>(resource);
        return res.data;
    }
}