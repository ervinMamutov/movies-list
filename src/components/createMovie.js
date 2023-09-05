import deleteHeader from '../handlers/deleteHandler.js';
import editHandler from '../handlers/editHandler.js';

const createMovies = (data) => {
    const container = document.createElement('div');
    container.classList.add('movie-info');

    const movieImage = document.createElement('img');
    movieImage.classList.add('movie-image');
    movieImage.src = data.src;

    const movieTitle = document.createElement('h2');
    movieTitle.classList.add('movie-title');
    movieTitle.innerText = data.title;

    const id = document.createElement('h4');
    id.classList.add('id');
    id.innerText = data.id;

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
        editHandler(e);
    });

    const buttonItems = document.createElement('div');
    buttonItems.classList.add('button-items');

    buttonItems.append(buttonDelete, buttonEdit);

    container.append(movieImage, movieTitle, id, buttonItems);
    return container;
};

export default createMovies;
