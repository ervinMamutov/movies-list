const updateMovieInfo = (editDom, movieInfo) => {
    editDom.querySelector('.movie-image').src = movieInfo.src;
    editDom.querySelector('.movie-image').alt = movieInfo.title;
    editDom.querySelector('.movie-title').innerText = movieInfo.title;
};

export default updateMovieInfo;
