import dom from '../dom.js';
import deleteHeader from '../handlers/deleteHandler.js';

const createMovies = (movieInfo) => {
    const container = document.createElement('div');
    container.id = movieInfo.id;
    container.classList.add('movie-info');

    const movieImage = document.createElement('img');
    movieImage.classList.add('movie-image');
    movieImage.alt = movieInfo.title;
    movieImage.src = movieInfo.src;

    const movieTitle = document.createElement('h2');
    movieTitle.classList.add('movie-title');
    movieTitle.innerText = movieInfo.title;

    const buttonDelete = document.createElement('btn');
    buttonDelete.classList.add('btn-delete');
    buttonDelete.innerText = 'Delete';
    buttonDelete.addEventListener('click', (e) => {
        deleteHeader(e);
    });

    const buttonEdit = document.createElement('btn');
    buttonEdit.classList.add('btn-edit');
    buttonEdit.innerText = 'Edit';
    buttonEdit.addEventListener('click', (e) => {
        dom.buttonAdd.innerText = 'Edit';
        container.classList.add('selected');
        dom.inputMovies.value = movieInfo.title;
        dom.inputSource.value = movieInfo.src;
    });

    const buttonItems = document.createElement('div');
    buttonItems.classList.add('button-items');

    buttonItems.append(buttonDelete, buttonEdit);

    container.append(movieImage, movieTitle, buttonItems);
    return container;
};

export default createMovies;
