const createYear = (year) => {
    const option = document.createElement('option');
    option.value = year;
    option.text = year;

    return option;
};

export default createYear;
