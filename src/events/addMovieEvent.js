import dom from '../dom.js';
import addHandler from '../handlers/addHandler.js';

const addMovieEvent = () => {
    let titleMovie;
    let sourceMovie;

    dom.inputMovies.addEventListener('change', () => {
        titleMovie = dom.inputMovies.value;
        addHandler(titleMovie, sourceMovie);
    });
    dom.inputSource.addEventListener('change', () => {
        sourceMovie = dom.inputSource.value;
        addHandler(titleMovie, sourceMovie);
    });
};

export default addMovieEvent;
