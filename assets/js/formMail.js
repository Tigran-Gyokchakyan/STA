$("#sendMail").on("click", function(){
	let name = $("#name").val().trim();
	let phone = $("#phone").val().trim();
	let message = $("#message").val().trim();

	if(name == ""){
		$("#errorMess").text("Enter your name");
		return false;
	}else if(phone == ""){
		$("#errorMess").text("Enter your phone");
		return false;
	}else if(message.length < 5){
		$("#errorMess").text("Enter your message");
		return false;
	}

	$("#errorMess").text("");

	$.ajax({
		url: '/assets/php/mail.php',
		type: 'POST',
		cache: false,
		data: {'name':name, 'phone':phone, 'message':message },	
		dataType: 'html',
		beforeSend: function(){
		  $("#sendMail").prop("disabled", true);
		},
		success: function(data){
		  if(!data){
		  	alert("Message not sent, try again");
		  }else{
		  	$("#mailform").trigger("reset");
		  }
		  $("#sendMail").prop("disabled", false);
		}		
	});
});