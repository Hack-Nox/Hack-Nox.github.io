window.addEventListener('load', () => {
    let lon
    let lat

    let temperaturaValor = document.getElementById('temperatura-valor')
    let temperaturaDescripcion = document.getElementById('temperatura-descripcion')

    let ubicacion = document.getElementById('ubicacion')
    let iconoAnimado = document.getElementById('icono-animado')



    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(posicion => {

            lon = posicion.coords.longitude
            lat = posicion.coords.latitude
            const api = "fc06d82a1e4e5baca09a06790da91da1";
            //ubicación actual    
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}`;


            fetch(url)
                .then(response => response.json())
                .then(data => {
                    let temp = data.main.temp / 10; // Dividir la temperatura por 10
                    temp = temp.toFixed(1); // Redondear a un decimal
                    temperaturaValor.textContent = `${temp} °C`;

                    
                    let desc = data.weather[0].description
                    temperaturaDescripcion.textContent = desc.charAt(0).toUpperCase() + desc.slice(1);
                    ubicacion.textContent = data.name


                    //para iconos dinámicos
                    console.log(data.weather[0].main)
                    switch (data.weather[0].main) {
                        case 'Thunderstorm':
                            iconoAnimado.src = '../animated/thunder.svg'
                            temperaturaDescripcion.textContent = 'Tormenta';
                            break;
                        case 'Drizzle':
                            iconoAnimado.src = '../animated/rainy-2.svg'
                            temperaturaDescripcion.textContent = 'Llovizna';
                            break;
                        case 'Rain':
                            iconoAnimado.src = '../animated/rainy-7.svg'
                            temperaturaDescripcion.textContent = 'Lluvia';
                            
                            break;
                        case 'Snow':
                            iconoAnimado.src = '../animated/snowy-6.svg'
                            temperaturaDescripcion.textContent = 'Nieve';
                            break;
                        case 'Clear':
                            iconoAnimado.src = '../animated/day.svg'
                            temperaturaDescripcion.textContent = 'Despejado';
                            break;
                        case 'Atmosphere':
                            iconoAnimado.src = '../animated/weather.svg'
                            temperaturaDescripcion.textContent = 'Ambiente';
                            break;
                        case 'Clouds':
                            iconoAnimado.src = '../animated/cloudy-day-1.svg'
                            temperaturaDescripcion.textContent = 'Nuboso';
                            
                            break;

                        default:
                            iconoAnimado.src = '../animated/cloudy-day-1.svg'
                            temperaturaDescripcion.textContent = 'Dia bonito';
                    }

                })
                .catch(error => {
                    alert(error)
                })
        })

    }
})
