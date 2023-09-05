import dom from '../dom.js';
import getMovies from '../../apis/getMovies.js';
import createMovies from '../components/createMovie.js';

const loadHandler = async () => {
    const moviesData = await getMovies();
    if (moviesData) {
        moviesData.forEach((data) => {
            dom.moviesRoot.append(createMovies(data));
        });
    }
};

export default loadHandler;
