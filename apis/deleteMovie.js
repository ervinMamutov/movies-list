import data from '../src/data.js';

const deleteMovie = async (id) => {
    const encodedUrl = encodeURI(`${data.baseUrl}/${id}`);
    try {
        const res = await fetch(encodedUrl, {
            method: 'DELETE'
        });
        if (!res.ok) {
            throw new Error(
                `Failed to to delete movie with id status : ${res.status}`
            );
        }
        const data = await res.json();
        return data;
    } catch (err) {
        console.error(err);
        return null;
    }
};

export default deleteMovie;
