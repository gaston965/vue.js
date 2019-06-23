// new Vue({
//    el:'main',
//    data:
//    {
//    	mensaje:'hola mundo',
//    }
//   });

// const vm = new Vue({
//    el: 'main',
//    data:
//    {
//    	 conectado:false,
//    	 edad:44,
//    }




// });
   

   // Renderizado de listas
// const vm= new Vue({
//    el: 'main',

//    data: 
//    {
//    	laborales:['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'],
   
//     tareas: [
    
//          {nombre:'Hacer la compra', prioridad:'baja'},

//          {nombre:'Aprender Vue y Firebase', prioridad:'Alta'},

//          {nombre:'Ir al gimnasio', prioridad:'alta'} ,  

//           ],

//           persona:
//           {
//            nombre:'Juan',
//            profesion:'dev',
//            ciudad:'valencia',



//           }




//    },





// });

const vm = new Vue({
   el: 'main',
   data:
   {
     tareas:['Aprender Vue.js',
              'Aprender ES6',
              'publicar algo todos los dias', 





                  ]
    
           },


           methods:
           {



           	
           }

}) ;


//Vanilla JavaScript

function agregarTarea()
{
  const input= document.querySelector('input[type=text]');
  vm.tareas.unshift(input.value);
  input.value='';


}