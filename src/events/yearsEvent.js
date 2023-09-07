import dom from '../dom.js';
import yearsHandler from '../handlers/yearsHandler.js';

const yearsEvent = () => {
    dom.years.addEventListener('click', (e) => {
        yearsHandler(e);
    });
};

export default yearsEvent;
