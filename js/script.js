window.onload = function()
{ 
  var num_aleato;
  contador=0;
  
      //Acciones del boton verificar
     nom_div("verifica").addEventListener('click', function(event)
    {
    	    contador=contador+1;//contador para el numero de intentos
          nom_div("pantalla1").innerHTML = "Intento No: "+(contador)+" de 20";

         // Comparamos los numeros y validamos el estado
        if(contador<20)
         {
         var numero = nom_div("verifi_numero").value;

         if(num_aleato>numero)
         {
          nom_div("pantalla").innerHTML = "Estas por debajo";

         }

          if(num_aleato<numero)
         {
          nom_div("pantalla").innerHTML = "Estas por arriba";

         }

         if(num_aleato==numero)
         {
          nom_div("pantalla").innerHTML = "Correcto Adivinaste!";
         }

         }
         else
         {          
           nom_div("pantalla").innerHTML = "No lo lograste";
           nom_div("pantalla1").innerHTML = "";
           nom_div("verifi_numero").innerHTML = "";
         }
            console.log(contador);
       
     });
    //Acciones del boton nuevo juego 
     nom_div("nuevo_juego").addEventListener('click', function(event)
    {  
         contador=0;
           nom_div("pantalla").innerHTML = "";
            nom_div("pantalla1").innerHTML = "";
            nom_div("verifi_numero").innerHTML = "";


        num_aleato = Math.floor((Math.random() * 200) + 1);
    	
    	console.log(num_aleato);

   	
     });

     //Funcion para acceder a loa elementos de html
    function nom_div(div)
	{
		return document.getElementById(div);
	}

}