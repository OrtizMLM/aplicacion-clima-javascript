let api_key = '605507acf87117e111e54a3ab5238541'
let difkelvin = 273.15
let ciudad = 'Roma'
let urlBase = 'https://api.openweathermap.org/data/2.5/weather'

document.getElementById('botonBusqueda').addEventListener('click', () =>{
    const ciudad = document.getElementById('ciudadEntrada').value
    if(ciudad){
        fetchDatosClima(ciudad)
    }
} )
function fetchDatosClima(ciudad){
    fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
    .then(response => response.json())
    .then(response => mostrarDatos(response))
}


function mostrarDatos(data){
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML= ''
    const ciudadNombre = data.name
    const temperatura = data.main.temp
    const descripcion = data.weather[0].description
    const pais = data.sys.country

    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = `${ciudadNombre}, ${pais}`
    
    const temperaturaInfo = document.createElement('p')
    temperaturaInfo.textContent = `La temperatura es: ${Math.floor(temperatura-difkelvin)}C` 

    const descripcionInfo = document.createElement('p')
    descripcionInfo.textContent = descripcion

    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(temperaturaInfo)
    divDatosClima.appendChild(descripcionInfo)
    

}