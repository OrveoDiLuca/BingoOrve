const ar = []
const car = []

const formulario = document.querySelector('#formulario1');
const carton = document.querySelector('#formulario2');
const send = document.querySelector("#send")


formulario.addEventListener("submit",AgregarUsuarios);
carton.addEventListener("submit",AgregarCarton);
send.addEventListener("click",cargar)

function AgregarUsuarios(e){
    e.preventDefault();
    if(ar.length > 3){
        alert("Solo se permiten 4 usuarios");
    }
    else if(ar.length <= 4){
        const user = e.target.nombre.value;
        ar.push(user)
        alert("Usuario agregado")
    }
    localStorage.setItem("usuarios",JSON.stringify(ar))
}


function AgregarCarton(e){
    e.preventDefault(); 
    const carton = e.target.cart.value
    car.push(carton)
    alert("Carton agregado")
}

function cargar(e){
    e.preventDefault()
    if(ar.length > 0 && car.length > 0){
        let variable = car[0]
        localStorage.setItem("carton",JSON.stringify(variable));
        window.location.href = "juego.html";
    }
    else if(ar.length < 4){
        alert("Tienes que agregar a los usuarios")
    }
    else if(car.length === 0 ){
        alert("Tienes que agregar al carton")
    }
    else{
        alert("Agrega a los usuarios y al carton")
    }
}
