(() => {

    // función para obtener información de una película por Id
    function getAllMovies(movieId: string) {    // WRONG
        console.log({ movieId });
    }

    function getMovieById(id: string) {         // GOOD
        console.log({ id });
    }


    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getAllMovieActors(id: string) {        // WRONG
        console.log({ id });
    }

    function getActorsMovieId(movieId: string) {    // GOOD
        console.log({ movieId });
    }




    // funcion para obtener el bio del actor por el id
    function getUsuario(ActorId: string) {      // WRONG
        console.log({ ActorId });
    }

    function getActorBioById(id: string) {      // GOOD
        console.log({ id });
    }

    // Crear una película

    // WRONG
    function movie(title: string, description: string, rating: number, cast: string[]) {
        console.log({ title, description, rating, cast });
    }

    // GOOD
    interface Movie {
        cast:               string[];
        description:        string; 
        rating:             number; 
        title:              string;
    
    }
    function createMovie({ cast, title, description, rating}: Movie) {
        console.log({ cast, title, description, rating});
    }

    // Crea un nuevo actor
    // WRONG
    function createActorIfActorNotExists(fullName: string, birthdate: Date): boolean {

        // tarea asincrona para verificar nombre
        // ..
        // ..
        if (fullName === 'fernando') return false;

        console.log('Crear actor');
        return true;

    }

    // GOOD - La función es bastante clara y dentro de ella se harán las comprobaciones necesarias y si cumple, creará el actor
    function createActor(fullName: string, birthdate: Date): boolean {

        // tarea asincrona para verificar nombre
        // ..
        // ..
        if (fullName === 'fernando') return false;

        console.log('Crear actor');
        return true;

    }




})();


