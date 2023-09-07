import dom from '../dom.js';
import resetInputHandler from '../handlers/resetInputHandler.js';

const cancelEvent = () => {
    dom.buttonCancel.addEventListener('click', () => {
        resetInputHandler();
    });
};

export default cancelEvent;
