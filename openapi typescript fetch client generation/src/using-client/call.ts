import { Fetcher } from 'openapi-typescript-fetch';
import { paths } from '../client';

// declare fetcher for paths
const fetcher = Fetcher.for<paths>()

// global configuration
fetcher.configure({
    baseUrl: 'http://127.0.0.1:8000',
});

export default async function getStudents() {
    // create fetch operations
    const studentApi = fetcher.path('/studentapi/').method('get').create()

    // fetch
    try {
        const response = await studentApi({})
        if (response.status === 200) {
            return response.data;
        }
    } catch (e) {
        console.log(e);
    }
}