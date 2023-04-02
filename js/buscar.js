fetch("http://api.citybik.es/v2/networks")
.then(Response => Response.json())
.then(data => procesoRespuesta(data))
.catch(error => console.error(error));

//Metodo para crear array del select 
function procesoRespuesta(data){
const locArray = data.networks;
//console.log(locArray);
let countryArray = [];
for (let i = 0; i < locArray.length; i++ ) {
    let country = data.networks[i].location.country;
    countryArray.push(country);
    countryArray.sort();
    }
let arrayUnico =[...new Set(countryArray)];
//console.log(countryArray);
//console.log(arrayUnico); 
addOptions("pais", arrayUnico);
}

function addOptions(domElement, arrayUnico) {
let select = document.getElementsByName(domElement)[0];
//console.log(select);
for (value in arrayUnico) {
    let option = document.createElement("option");
    option.text = arrayUnico[value];
    select.add(option);
}
}

//Metodo para crear la tabla de resultado
function buscarPais(){
    let valor = document.getElementById("pais").value;
    //console.log(valor);
    resultado.innerHTML =" ";

    const table =document.createElement('table');  
    //Crear la cabecera
    const tableHeader = document.createElement('tr');
    //Crear las columnas de la cabecera
    const nameHeader = document.createElement('th');
    const companyHeader = document.createElement('th');
    const cityHeader = document.createElement('th');
    const countryHeader = document.createElement('th');
    const coordHeader = document.createElement('th');
    //Agregar los textos a ala columnas
    nameHeader.innerText = "Nombre";
    companyHeader.innerText = "Empresa";
    cityHeader.innerText = "Ciudad";
    countryHeader.innerText = "Pais";
    coordHeader.innerText = "Coordenadas";
    //Agregar las columnas a la cabecera
    tableHeader.appendChild(nameHeader);
    tableHeader.appendChild(companyHeader);
    tableHeader.appendChild(cityHeader);
    tableHeader.appendChild(countryHeader);
    tableHeader.appendChild(coordHeader);
    //Agregar la cabecera a la tabla
    table.appendChild(tableHeader);

    fetch("http://api.citybik.es/v2/networks")
    .then(Response => Response.json())
    .then(data => {
        const locArray = data.networks;
        for (let i = 0; i < locArray.length; i++ ) {
            let country = data.networks[i].location.country;
            if(country === valor){
                let lat = locArray[i].location.latitude;
                let lon = locArray[i].location.longitude;

                //Creara una fila
                const location = document.createElement('tr');
                //Crear las columnas
                const nameName = document.createElement('td');
                const nameCompany = document.createElement('td');
                const nameCity = document.createElement('td');
                const nameCountry = document.createElement('td');
                const nameCoord = document.createElement('a');
                nameCoord.href =  `https://www.google.com/maps/@${lat},${lon},12.42z?hl=es`;
                nameCoord.target = "_black";
                
                //Agregar los datos a la columnas
                nameName.innerText = locArray[i].name;
                nameCompany.innerHTML = locArray[i].company;
                nameCity.innerText = locArray[i].location.city;
                nameCountry.innerHTML = locArray[i].location.country;
                nameCoord.innerHTML = "Ver mapa";
                //Agregar las columnas a la fila
                location.appendChild(nameName);
                location.appendChild(nameCompany);
                location.appendChild(nameCity);
                location.appendChild(nameCountry);
                location.appendChild(nameCoord);
                //Agregar la fila a la tabla
                table.appendChild(location);              
            }
            resultado.appendChild(table);
        }        
    })
    .catch(error => console.error(error));   
}


