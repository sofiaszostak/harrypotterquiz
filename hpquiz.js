



            /* llamar elementos con Jquery */


            $('#comenzar') 
            $('#trivia') 
            $('#pregunta'); 
            $('#pImg'); 
            $('#contador'); 
            $('#indicadorTiempo'); 

            $('#a'); 
            $('#b'); 
            $('#c'); 

            const progresoUsuario = document.getElementById('progresoUsuario') 

            const containerPuntaje = document.getElementById('puntaje') 


            /* array de preguntas */


            let preguntas = [

                {
                    pregunta: "¿Cómo se llama el perro de tres cabezas de Hagrid?",
                    imgSrc: "imagenes/perrotrescabezas.jpg",
                    opcionA: "Floppy",
                    opcionB: "Fluffy",
                    opcionC: "Bongo",
                    rtaCorrecta: "b"

                },

                {
                    pregunta: "¿Por qué es importante la varita de sauco?",
                    imgSrc: "imagenes/varitadesauco.jpg",
                    opcionA: "Porque es de Voldemort",
                    opcionB: "Porque es de Dumbledore",
                    opcionC: "Porque es la más poderosa",
                    rtaCorrecta: "c"


                },



                {
                    pregunta: "¿Cómo llaman a los no-magos??",
                    imgSrc: "imagenes/muggle.jpg",
                    opcionA: "Kappas",
                    opcionB: "Ashwinder",
                    opcionC: "Muggles",
                    rtaCorrecta: "c"


                }, 


                 {
                    pregunta: "¿Cuántos son los horrocruxes?",
                    imgSrc: "imagenes/horrocruxes.jpg",
                    opcionA: "7",
                    opcionB: "5",
                    opcionC: "9",
                    rtaCorrecta: "a"


                },  

                {
                    pregunta: "¿Cuál es el nombre de Lord Voldemort?",
                    imgSrc: "imagenes/nombrevoldemort.jpg",
                    opcionA: "Tom Maximus River",
                    opcionB: "Tom Rubber",
                    opcionC: "Tom Marvolo Riddle",
                    rtaCorrecta: "c"


                }


            ]


            


            let ultimaPregunta  = preguntas.length - 1;
            let pregEnCurso = 0;
            let conteo = 0
            const conteoPregunta = 10; /* segundos */
            const indicadorWidth = 150; /* 150px */
            const indicadorEnCurso = indicadorWidth / conteoPregunta;
            let TIMER;
            let puntaje = 0;


            /* mostrar preguntas */

            function crearPregunta() {

                let q = preguntas[pregEnCurso];
                $('#pregunta').html(`<p>${q.pregunta}</p>`); 
                $('#pImg').html("<img src=" + q.imgSrc + ">");
                $('#a').html(q.opcionA) /* elementos del array */
                $('#b').html(q.opcionB)
                $('#c').html(q.opcionC)
            }


            $('#comenzar').on('click', function empezarTrivia() {

                $('#comenzar').css("display", "none");
                crearPregunta();
                $('#trivia').css("display", "block");
                crearProgresoUsuario();
                crearContador();
                TIMER = setInterval(crearContador, 1000);


            })


            /* mostrar preguntas contestadas */

            function crearProgresoUsuario() {

                for (let pIndex = 0; pIndex <= ultimaPregunta; pIndex++) {
                    progresoUsuario.innerHTML += `<div class= 'prog' id=${pIndex}></div`;
                }

            }


            /* tiempo */


            function crearContador() {

                if (conteo <= conteoPregunta) {
                    $('#contador').html(conteo);
                    indicadorTiempo.style.width = conteo * indicadorEnCurso + "px"
                    conteo++

                } else {
                    conteo = 0;
                    rtaIncorrecta();
                    if (pregEnCurso < ultimaPregunta) {
                        pregEnCurso++;
                        crearPregunta();

                    } else {
                        clearInterval(TIMER);
                        mostrarPuntaje();
                    }


                }
            }




            function verificarRta(respuesta) {
                if (respuesta == preguntas[pregEnCurso].rtaCorrecta) {
                    puntaje++;
                    rtaEsCorrecta()
                } else {
                    rtaIncorrecta()
                }
                conteo = 0;
                if (pregEnCurso < ultimaPregunta) {
                    pregEnCurso++;
                    crearPregunta();

                } else {
                    
                    clearInterval(TIMER);
                    mostrarPuntaje();
                }



            }


            function rtaEsCorrecta() {
                document.getElementById(pregEnCurso).style.backgroundColor = "#0f0";
            }

            function rtaIncorrecta() {
                document.getElementById(pregEnCurso).style.backgroundColor = "#f00";

            }


            /* puntaje*/

            function mostrarPuntaje() {
                containerPuntaje.style.display = "block";

                
                const porcentajePuntaje = Math.round(100 * puntaje / preguntas.length);

               
                let txt = (porcentajePuntaje >= 80) ? "¡Sos un verdadero Potterhead!" : 
                   
                    (porcentajePuntaje >= 40) ? "Te faltó leer un par de libros" :
                    (porcentajePuntaje >= 20) ? "Definitivamente sos un muggle" :
                    "Definitivamente sos un muggle";

                 
                
                containerPuntaje.innerHTML = "<p class = 'txtPuntaje'>" + txt + "</p>"; 

            }


































