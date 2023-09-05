import deleteMovie from '../../apis/deleteMovie.js';

const deleteHeader = async (e) => {
    const targetEl = e.target;
    const inputEl = targetEl.closest('.movie-info');
    const idEl = inputEl.querySelector('.id');
    const id = idEl.innerText;
    console.log(id);
    await deleteMovie(id);
};

export default deleteHeader;
