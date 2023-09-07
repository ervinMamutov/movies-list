import deleteMovie from '../../apis/deleteMovie.js';

const deleteHandler = async (id) => {
    document.getElementById(id).remove();
    await deleteMovie(id);
};

export default deleteHandler;
