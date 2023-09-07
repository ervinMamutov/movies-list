import dom from '../dom.js';
import addHandler from '../handlers/addHandler.js';

const addMovieEvent = () => {
    dom.buttonAdd.addEventListener('click', () => {
        addHandler();
    });
};

export default addMovieEvent;
