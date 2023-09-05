import data from '../src/data.js';
const addMovies = async (titleMovie, sourceMovie) => {
    const encodedUrl = encodeURI(data.baseUrl);
    try {
        const res = await fetch(encodedUrl, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ title: titleMovie, src: sourceMovie })
        });
        if (!res.ok) {
            throw new Error(`Failed to get photos with status : ${res.status}`);
        }
        return await res.json();
    } catch (err) {
        console.error(err);
        return null;
    }
};

export default addMovies;
