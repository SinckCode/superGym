let moduloLogin;
let moduloPerfiles;
let moduloHome;
let moduloServicios;
let moduloContacto;
let moduloProductos;
let moduloUbicacion;
let moduloMembresia;

function toggleMenu() {
    const menu = document.getElementById('menuOptions');
    menu.classList.toggle('show');
}


function cargarModuloLogin () {
    //Definir petición al recurso del servidor
    fetch ('../views/login.html').then(
        function (response) {
            return response.text()

                }
            ).then(
                function (myHtml) {
                    document.getElementById('contenedorPrincipal2').innerHTML = myHtml;
                    import ('./moduloLogin.js').then(
                        function (controller) {
                            //Cargamos el controlador JS a una variable especifica para cada modulo
                            moduloLogin = controller;
                        }
                    )
                }
            )
        }

        function cargarPerfiles () {
            //Definir petición al recurso del servidor
            fetch ('../views/moduloPerfiles.html').then(
                function (response) {
                    return response.text()

                        }
            ).then(
                function (myHtml) {
                    document.getElementById('contenedorPrincipal2').innerHTML = myHtml;
                    import ('./moduloPerfiles.js').then(
                        function (controller) {
                            //Cargamos el controlador JS a una variable especifica para cada modulo
                            moduloPerfiles = controller;
                            }
                        )
                }
            )
        }

        function cargarHome () {
            //Definir petición al recurso del servidor
            fetch ('../views/Home.html').then(
                function (response) {
                    return response.text()

                        }
            ).then(
                function (myHtml) {
                    document.getElementById('contenedorPrincipal2').innerHTML = myHtml;
                    import ('./moduloHome.js').then(
                        function (controller) {
                            //Cargamos el controlador JS a una variable especifica para cada modulo
                            moduloHome = controller;
                            }
                        )
                }
            )
        }

        function cargarServicios () {
            //Definir petición al recurso del servidor
            fetch ('../views/Servicios.html').then(
                function (response) {
                    return response.text()

                        }
            ).then(
                function (myHtml) {
                    document.getElementById('contenedorPrincipal2').innerHTML = myHtml;
                    import ('./servicios.js').then(
                        function (controller) {
                            //Cargamos el controlador JS a una variable especifica para cada modulo
                            moduloServicios = controller;
                            }
                        )
                }
            )
        }

        function cargarContacto () {
            //Definir petición al recurso del servidor
            fetch ('../views/Contacto.html').then(
                function (response) {
                    return response.text()

                        }
            ).then(
                function (myHtml) {
                    document.getElementById('contenedorPrincipal2').innerHTML = myHtml;
                    import ('./contacto.js').then(
                        function (controller) {
                            //Cargamos el controlador JS a una variable especifica para cada modulo
                            moduloContacto = controller;
                            }
                        )
                }
            )
        }

        function cargarProductos () {
            //Definir petición al recurso del servidor
            fetch ('../views/Productos.html').then(
                function (response) {
                    return response.text()

                        }
            ).then(
                function (myHtml) {
                    document.getElementById('contenedorPrincipal2').innerHTML = myHtml;
                    import ('./productos.js').then(
                        function (controller) {
                            //Cargamos el controlador JS a una variable especifica para cada modulo
                            moduloProductos = controller;
                            }
                        )
                }
            )
        }

        function cargarUbiacion () {
            //Definir petición al recurso del servidor
            fetch ('../views/Ubicacion.html').then(
                function (response) {
                    return response.text()

                        }
            ).then(
                function (myHtml) {
                    document.getElementById('contenedorPrincipal2').innerHTML = myHtml;
                    import ('./ubicacion.js').then(
                        function (controller) {
                            //Cargamos el controlador JS a una variable especifica para cada modulo
                            moduloUbicacion = controller;
                            }
                        )
                }
            )
        }

        function cargarMembresia () {
            //Definir petición al recurso del servidor
            fetch ('../views/Membresia.html').then(
                function (response) {
                    return response.text()

                        }
            ).then(
                function (myHtml) {
                    document.getElementById('contenedorPrincipal2').innerHTML = myHtml;
                    import ('./membresia.js').then(
                        function (controller) {
                            //Cargamos el controlador JS a una variable especifica para cada modulo
                            moduloMembresia = controller;
                            }
                        )
                }
            )
        }

        function cargarPerfil () {
            //Definir petición al recurso del servidor
            fetch ('../views/Perfiles.html').then(
                function (response) {
                    return response.text()

                        }
            ).then(
                function (myHtml) {
                    document.getElementById('contenedorPrincipal2').innerHTML = myHtml;
                    import ('./perfiles.js').then(
                        function (controller) {
                            //Cargamos el controlador JS a una variable especifica para cada modulo
                            moduloPerfiles = controller;
                            }
                        )
                }
            )
        }

        cargarPerfil();
