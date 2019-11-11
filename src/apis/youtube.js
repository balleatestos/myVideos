import axios from 'axios';

const KEY = 'AIzaSyCZVOvD-1DfyOAg1nG47yqobqMdYHpyzUg';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key:KEY
    }
});