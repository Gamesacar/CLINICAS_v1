// en este script se reciben y estlizan

document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);
window.addEventListener("resize",anchoPagina);

//Declarando variables
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var contenedor_login_register = document.querySelector(".contenedor__login-register");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");

   
function anchoPagina(){
    if(window.innerWidth > 850){
        caja_trasera_login.style.display = "block";
        caja_trasera_register.style.display = "block";
    }else{
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display ="none";
        formulario_login.style.display = "block";
        formulario_register.style.display= "none";
        contenedor_login_register.style.left = "0px";
    }
}

anchoPagina ();

function iniciarSesion (){
    if(window.innerWidth > 850){
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "10px";
        formulario_login.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.opacity = "0" ;
    }else{
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "block";
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "none" ;
    }

}
function register (){
    if(window.innerWidth > 850){
    formulario_register.style.display = "block";
    contenedor_login_register.style.left = "410px";
    formulario_login.style.display = "none";
    caja_trasera_register.style.opacity = "0";
    caja_trasera_login.style.opacity = "1" ;
    
    }else{
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.display = "none";
        caja_trasera_login.style.display = "block" ;
        caja_trasera_login.style.opacity = "1" ;
    }
}



document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');

    registerForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        const celular = document.getElementById('celular').value;
        const role = document.getElementById('role').value;

        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden');
            return;
        }

        const data = { nombre, email, password, celular };

        try {
            let response;
            if (role === 'doctor') {
                response = await axios.post('http://localhost:4000/doctores/registrardoc', data);
            } else {
                response = await axios.post('http://localhost:4000/pacientes/registrarpaci', data);
            }
            alert(response.data.mensaje || 'Registro exitoso');
        } catch (error) {
            console.error('Error:', error);
            alert('Hubo un error al registrar');
        }
    });

    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        const role = document.getElementById('login-role').value;

        const data = { email, password };

        try {
            let response;
            if (role === 'doctor') {
                response = await axios.post('http://localhost:4000/doctores/login', data);
            } else {
                response = await axios.post('http://localhost:4000/pacientes/login', data);
            }
            alert(response.data.mensaje || 'Login exitoso');
        } catch (error) {
            console.error('Error:', error);
            alert('Hubo un error al iniciar sesión');
        }
    });
});
