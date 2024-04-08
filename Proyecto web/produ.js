const products = [
    {
        "id": 1,
        "name": "Aguacate Maduro",
        "price": 500,
        "image": "../img/AguaVeggi.png",
        "description": "El aguacate es una excelente fuente de grasas saludables, vitaminas y minerales. Es ideal para preparar guacamole o agregar a ensaladas para obtener un impulso de nutrientes esenciales."
    },
    {
        "id": 2,
        "name": "Chayote",
        "price": 250,
        "image": "../img/ChayoVeggi.png",
        "description": "El chayote es bajo en calorías y rico en fibra, lo que lo convierte en una excelente opción para promover la salud digestiva y controlar el peso. Puedes agregarlo a sopas, guisos o prepararlo al vapor como acompañamiento."
    },
    {
        "id": 3,
        "name": "Caja de fresas",
        "price": 290,
        "image": "../img/FresaFresh.png",
        "description": "Las fresas son ricas en antioxidantes, vitamina C y fibra dietética. Son perfectas para satisfacer antojos de dulces de manera saludable, ya sea como bocadillo por sí solas o agregadas a batidos y ensaladas."
    },
    {
        "id": 4,
        "name": "Guanabana",
        "price": 200,
        "image": "../img/GuanaFresh.png",
        "description": "La guanábana es conocida por sus propiedades antioxidantes y su delicioso sabor tropical. Es una excelente opción para refrescantes batidos o simplemente disfrutarla en rodajas como postre saludable."
    },
    {
        "id": 5,
        "name": "Jengibre",
        "price": 300,
        "image": "../img/JengibreVeggi.png",
        "description": "El jengibre es famoso por sus propiedades antiinflamatorias y digestivas. Puedes agregarlo a tus infusiones de té, jugos o utilizarlo para dar sabor a platos salados y dulces."
    },
    {
        "id": 6,
        "name": "Kiwi",
        "price": 200,
        "image": "../img/KiwiFresh.png",
        "description": "El kiwi es una excelente fuente de vitamina C, fibra y antioxidantes. Puedes disfrutarlo solo como bocadillo, agregarlo a ensaladas de frutas o usarlo como aderezo para platos principales."
    },
    {
        "id": 7,
        "name": "Limón",
        "price": 200,
        "image": "../img/LimonVeggi.png",
        "description": "Los limones son conocidos por su alto contenido de vitamina C y su capacidad para mejorar la inmunidad. Exprime limón sobre tus comidas, agrégalo al agua para obtener una bebida refrescante o úsalo como aderezo para ensaladas."
    },
    {
        "id": 8,
        "name": "Mandarina",
        "price": 200,
        "image": "../img/MandarinaFresh.png",
        "description": "Las mandarinas son una excelente fuente de vitamina C, fibra y antioxidantes. Son perfectas para llevar como bocadillo portátil o agregarlas a ensaladas para un toque cítrico refrescante."
    },
    {
        "id": 9,
        "name": "Manzana roja",
        "price": 200,
        "image": "../img/ManzanaFresh.png",
        "description": "Las manzanas rojas son ricas en fibra y antioxidantes, y son una opción de bocadillo saludable para satisfacer los antojos de dulces. Puedes disfrutarlas solas o con un poco de mantequilla de almendras para un toque extra de sabor."
    },
    {
        "id": 10,
        "name": "Manzana verde",
        "price": 200,
        "image": "../img/ManzanaVerdeFresh.png",
        "description": "Las manzanas verdes son refrescantes y llenas de fibra, lo que las convierte en un bocadillo ideal para mantenerse saciado durante todo el día. También son perfectas para agregar a ensaladas de frutas o preparar salsas saludables."
    },
    {
        "id": 11,
        "name": "Melon",
        "price": 200,
        "image": "../img/MelonFresh.png",
        "description": "El melón es una fruta jugosa y refrescante, baja en calorías y rica en vitaminas y minerales. Disfrútalo solo como postre o agrégalo a ensaladas de frutas para un toque dulce y refrescante."
    },
    {
        "id": 12,
        "name": "Melon Gold",
        "price": 200,
        "image": "../img/MelonGoldFresh.png",
        "description": "El melón gold es una variedad deliciosa y jugosa, rica en antioxidantes y vitamina C. Puedes disfrutarlo solo como bocadillo o agregarlo a batidos y ensaladas para un toque exótico."
    },
    {
        "id": 13,
        "name": "Naranja",
        "price": 200,
        "image": "../img/NarajaFresh.png",
        "description": "Las naranjas son conocidas por su alto contenido de vitamina C y su capacidad para fortalecer el sistema inmunológico. Disfruta de una naranja como bocadillo saludable o exprime su jugo para una refrescante bebida."
    },
    {
        "id": 14,
        "name": "Papa",
        "price": 200,
        "image": "../img/PapaVeggi.png",
        "description": "Las papas son una excelente fuente de carbohidratos complejos, fibra y vitamina C. Puedes disfrutarlas horneadas, hervidas o al vapor como acompañamiento nutritivo para cualquier comida."
    },
    {
        "id": 15,
        "name": "Papaya",
        "price": 200,
        "image": "../img/PapayaFresh.png",
        "description": "La papaya es conocida por su enzima digestiva natural, la papaína, y su alto contenido de vitamina C y antioxidantes. Disfruta de la papaya sola como postre o agrégala a batidos y ensaladas para un impulso de sabor y nutrientes."
    },
    {
        "id": 16,
        "name": "Pepino",
        "price": 200,
        "image": "../img/PepinoVeggi.png",
        "description": "Los pepinos son bajos en calorías y ricos en agua, lo que los convierte en un bocadillo refrescante y saciante. Puedes agregar rodajas de pepino a tus ensaladas o disfrutarlos como refrigerio por sí solos con un poco de hummus."
    },
    {
        "id": 17,
        "name": "Pera",
        "price": 200,
        "image": "../img/PeraFresh.png",
        "description": "Las peras son una excelente fuente de fibra, antioxidantes y vitaminas. Disfruta de una pera fresca como bocadillo o agrégala a ensaladas de hojas verdes para un toque de dulzura natural."
    },
    {
        "id": 18,
        "name": "Piña",
        "price": 200,
        "image": "../img/PinaFresh.png",
        "description": "La piña es una fruta tropical deliciosa y jugosa, rica en vitamina C y bromelina, una enzima digestiva. Disfruta de la piña sola como postre o agrégala a batidos y platos agridulces para un sabor tropical."
    },
    {
        "id": 19,
        "name": "Rabano",
        "price": 200,
        "image": "../img/RabaVeggi.png",
        "description": "Los rábanos son bajos en calorías y ricos en fibra, vitaminas y minerales. Puedes agregar rodajas de rábano a ensaladas o disfrutarlos como bocadillo con un poco de sal marina para un toque picante y refrescante."
    },
    {
        "id": 20,
        "name": "Remolacha",
        "price": 200,
        "image": "../img/RemolaVeggi.png",
        "description": "La remolacha es rica en antioxidantes, fibra y compuestos antiinflamatorios. Puedes disfrutarla cruda rallada en ensaladas, cocida al vapor como guarnición o asada como parte de platos principales nutritivos."
    },
    {
        "id": 21,
        "name": "Sandia",
        "price": 200,
        "image": "../img/SandiaFresh.png",
        "description": "La sandía es una fruta refrescante y baja en calorías, rica en agua, vitaminas y antioxidantes. Disfruta de la sandía sola como postre o agrégala a batidos y ensaladas para un toque dulce y refrescante."
    },
    {
        "id": 22,
        "name": "Tomate",
        "price": 200,
        "image": "../img/TomateVeggi.png",
        "description": "Los tomates son ricos en licopeno, un antioxidante que se ha relacionado con la salud del corazón y la reducción del riesgo de ciertos tipos de cáncer. Disfruta de los tomates en ensaladas, salsas o simplemente como bocadillo."
    },
    {
        "id": 23,
        "name": "Yuca",
        "price": 200,
        "image": "../img/YukaVeggi.png",
        "description": "La yuca es una excelente fuente de carbohidratos complejos y fibra, y es una opción alternativa a las papas. Puedes cocinarla al horno, hervida o frita para disfrutar de su sabor único y textura suave."
    },
    {
        "id": 24,
        "name": "Zanahoria",
        "price": 200,
        "image": "../img/ZanahoriaVeggi.png",
        "description": "Las zanahorias son ricas en betacaroteno, que se convierte en vitamina A en el cuerpo y es esencial para la salud de la vista y la piel. Disfruta de las zanahorias crudas como bocadillo o agrégalas a sopas y guisos para obtener un impulso de sabor y nutrientes."
    }
];

const searchInput = document.getElementById('searchInput');
const productsList = document.getElementById('productsList');

// Función para mostrar los productos que coincidan con la búsqueda
function showProducts(productsToShow) {
    productsList.innerHTML = '';

    productsToShow.forEach(product => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.name;
        img.classList.add('product-image');
        li.appendChild(img);
        
        const productName = document.createElement('span');
        productName.textContent = `${product.name} - Precio: ₡${product.price}`;
        li.appendChild(productName);
        
        productsList.appendChild(li);
    });
}

// Función para filtrar los productos según la búsqueda
function filterProducts(searchTerm) {
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    showProducts(filteredProducts);
}

// Mostrar todos los productos al cargar la página
showProducts(products);

// Escuchar cambios en el campo de búsqueda y filtrar los productos en consecuencia
searchInput.addEventListener('input', () => {
    filterProducts(searchInput.value);
});