(() => {

    // arreglo de temperaturas celsius
    const arrayOfNums = [33.6, 12.34];              // WRONG
    const temperaturesCelsius = [33.6, 12.34];      // GOOD

    // Dirección ip del servidor
    const ip = '123.123.123.123';                   // WRONG
    const serverIp = '123.123.123.123';             // GOOD

    // Listado de usuarios
    // WRONG
    const people = [{ id: 1, email: 'fernando@google.com' }, { id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }];
    // GOOD
    const users = [{ id: 1, email: 'fernando@google.com' }, { id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }];

    // Listado de emails de los usuarios
    const emails = people.map(u => u.email);                    // WRONG
    const userEmails = users.map(user => user.email);           // GOOD

    // Variables booleanas de un video juego
    const jump = false;                                         // WRONG
    const canJump = false;                                      // GOOD
    const run = true;                                           // WRONG
    const canRun = true;                                        // GOOD
    const noTieneItems = true;                                  // WRONG                   
    const hasItems = false;                                     // GOOD
    const loading = false;                                      // WRONG
    const isLoading = true;                                     // GOOD


    // Otros ejercicios
    // tiempo inicial
    const start = new Date().getTime();                         // WRONG
    const startTime = new Date().getTime();                     // GOOD
    //....                              
    // 3 doritos después
    //...
    // Tiempo al final
    const end = new Date().getTime() - start;                   // WRONG
    const endTime = new Date().getTime() - start;               // GOOD


    // Funciones
    // Obtiene los libros
    function book() {       // WRONG
        throw new Error('Function not implemented.');
    }

    function getBooks() {   // GOOD
        throw new Error('Function not implemented.');
    }
    // =================================================

    // obtiene libros desde un URL
    function BooksUrl(u: string) {          // WRONG
        throw new Error('Function not implemented.');
    }

    function getBooksByUrl(url: string) {     // GOOD
        throw new Error('Function not implemented.');
    }

    // =================================================

    // obtiene el área de un cuadrado basado en sus lados
    function areaCuadrado(s: number) {
        throw new Error('Function not implemented.');
    }

    function getSquareArea( side: number) {
        throw new Error('Function not implemented.');
    }

    // =================================================   
    // imprime el trabajo
    function printJobIfJobIsActive() {  // WRONG
        throw new Error('Function not implemented.');
    }

    function printJob() {               // GOOD
        throw new Error('Function not implemented.');
    }

    // Independientemente de si está activa la impresora, el nombre de la acción es imprimir 
    // y luego hará la comprobación necesaria y si está disponible, imprimirá


})();




