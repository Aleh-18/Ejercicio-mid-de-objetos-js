/*
1. Define un objeto agenda que tenga las siguientes propiedades iniciales:

nombre : nombre de la agenda o del usuario.

tareas (array) : inicialmente vacío, para almacenar las tareas.

2. Al objeto agenda, añade los siguientes métodos:

agregarTarea(descripcion, prioridad): función que recibe una descripción (string) y una prioridad (número, por ejemplo 1 = alta, 2 = media, 3 = baja).
 Crea un objeto tarea con esas propiedades y un estado inicial "pendiente", y lo añade al arreglo tareas.

listarTareas(): función que recorre el array tareas y escribe por consola (o devuelve) cada tarea con su descripción, prioridad y estado.

marcarCompletada(indice): función que, dado el índice de la tarea en el arreglo (numero entero), cambia el estado de esa tarea a "completada". Si el índice no es válido, emitir un mensaje de error o manejarlo de forma segura.

eliminarTarea(indice): función que elimina la tarea del array tareas en la posición dada (por ejemplo con splice). Igual que antes, manejar casos inválidos.
(

listarPendientes(): función que filtra las tareas cuyo estado sea "pendiente" y las muestra.

3. Añade también un método 
ordenarPorPrioridad() que reorganice el arreglo tareas de modo que 
las tareas de prioridad más alta (números menores) queden primero.
*/

let agenda={
    nombre: "Agenda camaron",
    tareas: []
};

function agregarTarea(descripcion,prioridad){
    
    let tarea ={
        estado: "pendiente",
        descripcion: descripcion,
        prioridad: prioridad
    };
    
    if(typeof(descripcion) !== "string" || prioridad<1 || prioridad>3){
        console.log("La tarea no es valida");
    }else{
        agenda.tareas.push(tarea);
    };

}
    

function listarTareas(){
    
    if(agenda.tareas.length > 0){
        agenda.tareas.forEach(tareas=> {
            console.log(tareas);
        });
    }else{
        console.log("No hay tareas illo");
    };

};

function marcarCompletada(indice){
    if(agenda.tareas[indice]){
        agenda.tareas[indice].estado="completada";
    }else{
        console.log("La tarea no existe churrita");
    };
};

function eliminarTarea(indice){
    if(agenda.tareas[indice]){
        agenda.tareas.splice(indice,1);
    }else{
        console.log("La tarea no existe churrita");
    };
};

function listarPendientes(){
     let i=0;
    agenda.tareas.forEach((tarea)=>{
       
        if(tarea.estado==="pendiente"){
            i++;
            console.log(tarea);
        }
    });
    if(i===0){
        console.log("No hay tareas pendientes");
    }
};

function ordenarPorPrioridad(){
    agenda.tareas.sort((a, b) => a.prioridad - b.prioridad);
    console.log(agenda.tareas);
}
//no entiendo q hace esto



//pruebas
agregarTarea("Hacer la compra",2);
agregarTarea("Sacar al perro",1);
agregarTarea("Lavar la ropa",3);

listarTareas();

marcarCompletada(1);
listarTareas();

eliminarTarea(0);
listarTareas();

listarPendientes();

ordenarPorPrioridad();
listarTareas();



