import dom from '../dom.js';
import getMovies from '../../apis/getMovies.js';
import createMovies from '../components/createMovie.js';
import sortData from '../utils/sortData.js';
import createLoader from '../components/createLoader.js';

const loadHandler = async () => {
    const loaderDom = createLoader();
    dom.main.append(loaderDom);

    const moviesData = await getMovies();
    const sortMovies = sortData(moviesData, 'id');

    if (sortMovies) {
        loaderDom.remove();
        sortMovies.forEach((sortMovie) => {
            const movieContainer = createMovies(sortMovie);
            dom.moviesRoot.append(movieContainer);
        });
    }
};

export default loadHandler;
