const formulario__main = document.querySelector("#main__formulario")
const button__enviar = document.querySelector("#main__formulario")
const main__input = document.querySelector("#main__input")
const spinner = document.querySelector("#spinner")
const hl__text = document.querySelector("#hl__text")
const button__verificar = document.querySelector(".button")
const button__siguiente = document.querySelector(".button__siguiente")
let dominios = {}

formulario__main.addEventListener("submit",validarFormulario)

function validarFormulario(e){
        hl__text.innerHTML=""
        e.preventDefault();
        let valueInput = main__input.value;
        console.log(valueInput)
        fetch("http://localhost:3000/clientes")
        .then((response) => response.json())
        .then((data) => {
            let arrayClientes = []
            let arrayDominios = []
            arrayClientes.push(data)
            arrayDominios = arrayClientes[0]
            spinner.classList.add("spinner")
            for(i=0;i < arrayDominios.length;i++){
                if(arrayDominios[i]["dominio"] === valueInput){
                    setTimeout(() =>{
                        spinner.classList.remove("spinner")
                        hl__text.classList.add("cliente") 
                        hl__text.innerHTML = "Es cliente de hostinglabs (*Click en siguiente)"
                        button__verificar.classList.add("oculto")
                        button__siguiente.classList.remove("oculto")
                        button__siguiente.setAttribute("onclick","test()")              
                    },2000)
                    break
                }else{
                    setTimeout(() =>{
                        spinner.classList.remove("spinner")
                        hl__text.classList.add("noCliente") 
                        hl__text.innerHTML = "No es cliente de hostinglabs"
                    },2000)
                    break
                }
            }

        })
    }


    function test(){    
        (function(loading, success) {
            var xhr = XMLHttpRequest !== undefined ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
                              loading.apply(null, []);
                              xhr.open('get', 'https://api.ipify.org/?format=json', true);
                              xhr.onreadystatechange = function() {
                                  if (xhr.readyState === 4) {
                                      success.call(null, JSON.parse(xhr.responseText));
                                  }
                              }
                              xhr.send();
                          }(function() {
                              document.getElementById('my-ip').innerHTML = 'Loading...';
                          }, function(response) {
                              document.getElementById('my-ip').innerHTML = response.ip;
                          }))
                          getNavegador();
        function getNavegador(){
            let navegador = navigator.userAgent
            document.getElementById("navegador").innerHTML= navegador

        }
                          
    }
