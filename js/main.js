$(window).load(function(){
    $("#load").fadeOut(4000);
});

$(document).ready(function(){
		$("#sign").submit(function(){
			$("#next").attr("disabled");
			$("#next-verificacion").attr("disabled");
		});
		
		$("#sign").validate({
			  rules: {
			    telefono:{
			    	required: true,
			      number: true,                
			      minlength: 9
			      }  
			    },
			  messages: {
			    telefono: {
			      required: "Please enter your phone",
			      number:"Please enter only number",
			      minlength: "Enter a 9-digit number"
			      }
			    },
		  	submitHandler: function() {
		    		$("#next").removeAttr("disabled");
		    	}
		});
});