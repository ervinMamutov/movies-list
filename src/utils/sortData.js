const sortData = (moviesData) => {
    return moviesData.sort((a, b) => b.id - a.id);
};

export default sortData;
