# Validador de Expresiones Equilibradas

Crear una función que reciba una expresión y determine si sus delimitadores (paréntesis () ,

llaves {} , y corchetes [] ) están equilibrados. La función debe devolver True si están

equilibrados y False en caso contrario.



Requerimientos

​       1. Identificación de Delimitadores:

- La función debe identificar y verificar únicamente los paréntesis () , las llaves {} , y los corchetes []
- Los caracteres no delimitadores (como letras, números y operadores) pueden ser ignorados en el proceso de validación.



​		2. Reglas para Expresiones Equilibradas:

- Cada delimitador de apertura debe tener su correspondiente delimitador de cierre en el orden correcto.
- Los delimitadores anidados deben cerrarse en el orden inverso al que se abrieron. Ejemplo:
- ({[]}) es equilibrado.
- ([)] no es equilibrado.
- La expresión debe terminar con todos los delimitadores cerrados.



​		3. Manejo de Errores y Casos Especiales:

- La función debe devolver False si la expresión contiene un número desigual de delimitadores de apertura y cierre.
- La función debe devolver True si no hay delimitadores en la expresión, ya que se considera equilibrada.
- Para cada caso, la función debe manejar adecuadamente delimitadores solitarios sin pareja de cierre o apertura.



​		4. Interfaz para Ingresar y Validar Expresiones:

- Crear una interfaz simple en la que el usuario pueda ingresar una expresión y ver si está equilibrada o no.

# Resultado esperado

Para desarrollar la división del ejercicio FrontEnd/BackEnd se deben tener los siguientes puntos en cuenta:

- El aplicativo web (FrontEnd) deberá ser subido en un repositorio de GitHub compartido con el Trainer con el nombre “EJERCICIO#_JS_APELLIDONOMBRE”, el cual contendrá el (`README`) que documente el propósito de dicho aplicativo. Su desarrollo quedará a criterio propio del desarrollador.
- El aplicativo debe manejar de manera correcta el modelo documento-objeto (DOM) para un buen funcionamiento por parte del motor del navegador.
- Debe manejar e implementar comandos de Javascript alrededor de la página FrontEnd (Si aplica).
- Debe ser ***responsive\*** y manejar UI/UX a lo largo de todo el proyecto basado en el wireframe propuesto por el equipo de diseño (iPhone 14 Pro Max y 1080p).