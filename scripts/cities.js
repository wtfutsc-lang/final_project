const cities = [
    {
        name: 'minsk',
        description: 'Minsk is the capital and largest city of Belarus, located on the Svislach and the now subterranean Nyamiha rivers',
        population: '2',
        images: ['./public/minsk2.jpg'],
        attractions: [
            {
                name: 'National Library of Belarus',
                description: 'The National Library of Belarus is the largest library in the Republic of Belarus, located in Minsk.',
                image: './public/libraru.jpg'
            },
             {
                name: 'National Library of Belarus',
                description: 'The National Library of Belarus is the largest library in the Republic of Belarus, located in Minsk.',
                image: './public/libraru.jpg'
            },
            {
                name: 'National Library of Belarus',
                description: 'The National Library of Belarus is the largest library in the Republic of Belarus, located in Minsk.',
                image: './public/libraru.jpg'
            }
        ]
    },
    {
        name: 'krakow',
        description: 'Krakow, the Royal Capital City of Kraków – a city with county rights located in southern Poland on the Vistula River.',
        population: '0.8',
        images: ['./public/krakov2.jpg'],
        attractions: [
            {
                name: 'Main Square',
                description: 'It is the principal urban space located at the center of the city. It dates back to the 13th century.',
                image: './public/squ.jpg'
            }
        ]
    },
    {
        name: 'tallinn',
        description: 'Tallinn is the capital and most populous city of Estonia. Located on a bay in northern Estonia.',
        population: '0.5',
        images: ['./public/tal1.jpg'],
        attractions: [
            {
                name: 'Tallinn Old Town',
                description: 'Tallinn Old Town is a UNESCO World Heritage site and one of the best-preserved medieval cities.',
                image: './public/bash.jpg'
            }
        ]
    }
];


function initCityPage() {
    
    const urlParams = new URLSearchParams(window.location.search);

  
    const cityData = cities.find(c => c.name === urlParams.get('name'));


   
    const infoBlock = document.querySelector('.info');
    if (infoBlock) {
        infoBlock.innerHTML = `
            <img src="${cityData.images[0] || './public/beckett-p-ze09IQjOZhk-unsplash.jpg'}" alt="${cityData.name}">
            <div>
                <h2>${cityData.name}</h2>
                <p>${cityData.description}</p>
                <p><strong>Population:</strong> ${cityData.population} million people.</p>
            </div>
        `;
    }

  
    const cardsContainer = document.querySelector('.cards-container');
    if (cardsContainer) {
      
        cardsContainer.innerHTML = cityData.attractions.map(attr => `
            <div class="card">
                <img src="${attr.image || './public/beckett-p-ze09IQjOZhk-unsplash.jpg'}" alt="${attr.name}">
                <h3>${attr.name}</h3>
                <p>${attr.description}</p>
            </div>
        `).join('');
    }
}


document.addEventListener('DOMContentLoaded', initCityPage);
