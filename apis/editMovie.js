import data from '../src/data.js';

const editMovie = async (id, updateMovie) => {
    const encodingUrl = encodeURI(data.baseUrl);
    try {
        const res = await fetch(`${encodingUrl}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(updateMovie)
        });
        if (!res.ok) {
            throw new Error(
                `Failed to fetch update movie with status : ${res.status}`
            );
        }
        return await res.json;
    } catch (err) {
        console.error(err);
        return null;
    }
};

export default editMovie;
