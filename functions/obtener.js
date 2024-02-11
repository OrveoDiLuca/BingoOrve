let users = localStorage.getItem("usuarios");
const personas = JSON.parse(users);

let N = localStorage.getItem("carton");
let size = JSON.parse(N);
size = parseInt(size);

//Esto lo que hace es que verifica si el arreglo users esta en el localstorage y si es asi lo inyecta en el html. 
if(personas){
    let usuariosHTML = "";
    for (let i = 0; i < personas.length; i++) {
        usuariosHTML += "<div class='usuario'><a href='#'>" + personas[i] + "</a></div> "
    }
    document.getElementById("usuarioss").innerHTML = usuariosHTML;
}else{
    console.log("No hay usuarios")
}


function generarLista(num){
    const lista = []
    if(num === "number"){
        tamanio = size * size; 
        for (let i = 0; lista.length < tamanio; i++){
            const ra = lista.push(Math.floor(Math.random() * 50) + 1);
            if(!lista.includes(ra)){
                lista.push(ra);
            }
        }
        if(lista.length > tamanio){
            lista.pop();
        }
    }else if(num === "string"){
        for (let i = 0; lista.length < 24+1; i++){
            const Numeroaleatorio = Math.floor(Math.random() * 50) + 1;
            if (!lista.includes(Numeroaleatorio)) {
                lista.push(Numeroaleatorio);
            }
        }
    }
    return lista
}


//Como estoy teniendo problemas con la cantidad de las columnas y las filas, lo que hare es unos condicionales. 
if(size === 3){
    document.getElementById("num-matriz").className = "num-matriz-3";
}else if(size === 4){
    document.getElementById("num-matriz").className = "num-matriz-4";
}else if(size === 5){
    document.getElementById("num-matriz").className = "num-matriz-5";
}


const x = generarLista("number")
const w = generarLista("number")
const z = generarLista("number")
const t = generarLista("number")
const y = generarLista("string")

const container = document.getElementById("num-matriz")
const container2 = document.getElementById("num-matriz2")
const container3 = document.getElementById("num-matriz3")
const container4 = document.getElementById("num-matriz4")


x.forEach((num) => {
    const div = document.createElement('div');
    div.className = 'num';
    div.id = `${x.indexOf(num)}`;
    div.textContent = `${num}`;
    container.appendChild(div);
});

w.forEach((num) => {
    const div = document.createElement('div');
    div.className = 'num';
    div.id = `${w.indexOf(num)}`;
    div.textContent = `${num}`;
    container2.appendChild(div);
});

z.forEach((num) => {
    const div = document.createElement('div');
    div.className = 'num';
    div.id = `${z.indexOf(num)}`;
    div.textContent = `${num}`;
    container3.appendChild(div);
});

t.forEach((num) => {
    const div = document.createElement('div');
    div.className = 'num';
    div.id = `${t.indexOf(num)}`;
    div.textContent = `${num}`;
    container4.appendChild(div);
});

let contador = 25
num = document.getElementById("numeroAleatorio");
tur = document.getElementById("turno");
turno.innerText = contador;
num.innerText = 0;

let miBoton = document.getElementById("verificacion");

function GeneradordeBingo() {
    if (contador < y.length) {
        turno.innerText = contador - 1;
        num.innerText = y[contador];
        if (x.includes(y[contador]) ) { //Si x contiene el numero de la posicion contador de la lista "y" entonces busca ese indice en la lista de x mediante indexof, y al final cambia la clase a numero-valioso numero
            numeroverificado = document.getElementById(`${x.indexOf(y[contador])}`);
            numeroverificado.className = 'numero-valioso numero';
        }
    }
    contador--;
    if(contador <= 0){
        alert("Fin del juego")
        miBoton.style.display = "none";
    }
}


function volverAPaginaPrincipalYBorrarDatos() {
    localStorage.clear();
    window.location.href = "index.html"; 
}

const botonVolver = document.getElementById('salir');

botonVolver.addEventListener('click', volverAPaginaPrincipalYBorrarDatos);



const generarDiv1 = document.createElement("div");
const prueba = document.getElementById("prueba");


//Para mostrar la matriz. 
function mostrar(){
    document.getElementById("prueba").style.display = "block";
}

function ocultar(){
    document.getElementById("prueba").style.display = "none";
}

function mostrar2(){
    document.getElementById("prueba2").style.display = "block";
}

function ocultar2(){
    document.getElementById("prueba2").style.display = "none";
}

function mostrar3(){
    document.getElementById("prueba3").style.display = "block";
}

function ocultar3(){
    document.getElementById("prueba3").style.display = "none";
}

function mostrar4(){
    document.getElementById("prueba4").style.display = "block";
}

function ocultar4(){
    document.getElementById("prueba4").style.display = "none";
}