import createYear from '../components/createYear.js';
import dom from '../dom.js';

const yearsHandler = () => {
    const years = [];
    for (let i = 2023; i > 1975; i--) {
        years.push(i);
    }

    years.forEach((year) => {
        const yearSelect = createYear(year);
        dom.years.append(yearSelect);
    });
};

export default yearsHandler;
