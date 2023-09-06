const createLoader = () => {
    const page = document.createElement('div');
    const container = document.createElement('div');
    const text = document.createElement('div');

    page.classList.add('loader-page');
    page.id = 'page';
    container.classList.add('loader-container');
    container.id = 'container';

    const rings = [];

    for (let i = 1; i <= 4; i++) {
        const ring = document.createElement('div');
        ring.classList.add('loader-ring');
        ring.id = 'ring';
        rings.push(ring);
    }

    text.classList.add('loader-text');
    text.id = 'h3';
    text.innerText = 'Loading';

    container.append(...rings, text);
    page.append(container);
    return page;
};

export default createLoader;
