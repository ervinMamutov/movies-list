import deleteMovie from '../../apis/deleteMovie.js';

const deleteHeader = async () => {
    const targetEl = e.target;
    const inputEl = targetEl.closest('.movie-info');
    const id = inputEl.id;
    inputEl.remove();
    await deleteMovie(id);
};

export default deleteHeader;
