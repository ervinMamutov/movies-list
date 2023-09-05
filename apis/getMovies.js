import data from '../src/data.js';

const getMovies = async () => {
    const encodedUrl = encodeURI(data.baseUrl);
    try {
        const res = await fetch(encodedUrl);
        if (!res.ok) {
            throw new Error(`Failed to get photos with status : ${res.status}`);
        }
        return await res.json();
    } catch (err) {
        console.error(err);
        return null;
    }
};

export default getMovies;
