import dom from '../dom.js';
import addMovies from '../../apis/addMovies.js';
import createMovies from '../components/createMovie.js';
import updateMovieInfo from '../components/updateMovieInfo.js';
import editMovie from '../../apis/editMovie.js';

const addHandler = async (e) => {
    const movieInfo = {
        title: dom.inputMovies.value,
        src: dom.inputSource.value
        // year: dom.inputYear.value,
    };

    /* if (!dom.inputMovies.value) {
        dom.inputMovies.value = '../assets/no-image,svg';
    } */

    if (!dom.inputMovies.value || !dom.inputMovies.value) {
        dom.error.innerText = 'Please, enter the name of the movie';
        dom.error.classList.add('err');
        return;
    }

    dom.error.innerText = '';
    dom.error.classList.remove('err');

    if (dom.buttonAdd.innerText === 'Confirm') {
        console.log(movieInfo);
        const movieData = createMovies(movieInfo, dom);
        dom.moviesRoot.prepend(movieData);
        await addMovies(movieInfo);
    } else {
        const editDom = document.querySelector('.selected');
        updateMovieInfo(editDom, movieInfo);
        const id = Number(editDom.id);
        await editMovie(id, movieInfo);
        editDom.classList.remove('.selected');
        dom.buttonAdd.innerText = 'Confirm';
    }

    dom.inputMovies.value = '';
    dom.inputSource.value = '';
};

export default addHandler;
