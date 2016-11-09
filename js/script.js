//NAVIGATOR HAMBURGUER INTERACTIVY
$(document).ready(function(){
			document.querySelector( "#nav-toggle" )
  .addEventListener( "click", function() {
    this.classList.toggle( "active" );
  });
    			$("#nav-toggle").click(function(){
        		$("#text").toggle("slow","swing");
    		});
		});