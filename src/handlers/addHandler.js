import dom from '../dom.js';
import addMovies from '../../apis/addMovies.js';

const addHandler = async (titleMovie, sourceMovie) => {
    if (titleMovie && sourceMovie) {
        await addMovies(titleMovie, sourceMovie);
    }
};

export default addHandler;
