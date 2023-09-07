import dom from '../dom.js';

const resetInputHandler = (e) => {
    dom.inputMovies.value = '';
    dom.inputSource.value = '';
};

export default resetInputHandler;
