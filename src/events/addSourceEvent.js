import dom from '../dom.js';
import addHandler from '../handlers/addHandler.js';

const addSourceEvent = () => {
    dom.inputSource.addEventListener('change', () => {
        const sourceMovie = dom.inputSource.value;
        addHandler(sourceMovie);
    });
};

export default addSourceEvent;
