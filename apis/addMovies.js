import data from '../src/data.js';
const addMovies = async (movieInfo) => {
    console.log(data);
    const encodedUrl = encodeURI(data.baseUrl);
    try {
        const res = await fetch(encodedUrl, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(movieInfo)
        });
        if (!res.ok) {
            throw new Error(`Failed to add movie with status : ${res.status}`);
        }
        return await res.json();
    } catch (err) {
        console.error(err);
        return null;
    }
};

export default addMovies;
