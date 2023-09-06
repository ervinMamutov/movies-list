import dom from '../dom.js';
import getMovies from '../../apis/getMovies.js';
import createMovies from '../components/createMovie.js';
import sortById from '../utils/sortById.js';
import createLoader from '../components/createLoader.js';

const loadHandler = async () => {
    const loaderDom = createLoader();
    dom.main.append(loaderDom);

    const moviesData = await getMovies();
    const sortMovies = sortById(moviesData);
    if (sortMovies) {
        loaderDom.remove();
        sortMovies.forEach((sortMovie) => {
            const movieContainer = createMovies(sortMovie);
            dom.moviesRoot.append(movieContainer);
        });
    }
};

export default loadHandler;
