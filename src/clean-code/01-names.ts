(() => {

    // Ejemplo
    // Archivos a evaluar - files to evaluate
    // WRONG const fs = ...
    const filesToEvaluate = [
        { id: 1, flagged: false },
        { id: 2, flagged: false },
        { id: 3, flagged: true },
        { id: 4, flagged: false },
        { id: 5, flagged: false },
        { id: 7, flagged: true },
    ];

    // Archivos marcados para borrar - files to delete
    // WRONG archivos => hay que cambiarlo
    const filesToDelete = filesToEvaluate.map(file => file.flagged);

    /**
     * Clases que tienen nombres que no son recomendables
     */
    class AbstractUser { };
    class UserMixin { };
    class UserImplementation { };
    interface IUser { };

    // Mejor
    class User { };
    interface User { };

    // Todo: Tarea

    // día de hoy - today
    const ddmmyyyy = new Date();                        // WRONG
    const currentDate = new Date();                     // GOOD

    // días transcurridos - elapsed time in days
    const d: number = 23;                               // WRONG
    const elapsedTimeInDays: number = 23;                // GOOD

    // número de archivos en un directorio - number of files in directory
    const dir = 33;                                     // WRONG
    const filesInDirectory = 33;                        // GOOD

    // primer nombre - first name
    const nombre = 'Anartz';                            // WRONG
    const firstName = 'Anartz';                         // GOOD


    // primer apellido - last name
    const apellido = 'Mugika';                          // WRONG
    const lastName = 'Mugika';                          // GOOD

    // días desde la última modificación - days since modification
    const dsm = 12;                                     // WRONG
    const daysFromLastUpdate = 12;                      // GOOD

    // cantidad máxima de clases por estudiante - max classes per student
    const max = 6;                                      // WRONG
    const maxClassesPerStudent = 6;                     // GOOD


})();