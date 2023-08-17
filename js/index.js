$('.form').find('input, textarea').on('keyup blur focus', function (e) {
  
  var $this = $(this),
      label = $this.prev('label');

	  if (e.type === 'keyup') {
			if ($this.val() === '') {
          label.removeClass('active highlight');
        } else {
          label.addClass('active highlight');
        }
    } else if (e.type === 'blur') {
    	if( $this.val() === '' ) {
    		label.removeClass('active highlight'); 
			} else {
		    label.removeClass('highlight');   
			}   
    } else if (e.type === 'focus') {
      
      if( $this.val() === '' ) {
    		label.removeClass('highlight'); 
			} 
      else if( $this.val() !== '' ) {
		    label.addClass('highlight');
			}
    }

});

$('.tab a').on('click', function (e) {
  
  e.preventDefault();
  
  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');
  
  target = $(this).attr('href');

  $('.tab-content > div').not(target).hide();
  
  $(target).fadeIn(600);
  
});

$(document).ready(function() {
	// your js code goes here...
	$('#button').hide();
	//infoMessage
	// $("#username").parent().append("<span id = \"userinfo\" class =\"info\"> Username field MUST contain only alphabetical or numerical characters</span>").css('color', 'red')
	// $("#userinfo").hide();
	
	$("#password").parent().append("<span id = \"pwinfo\" class =\"info\"> Password field SHOULD be atleast 8 characters long having 1 uppercase,1 lowercase,1digit,1special character</span>").css('color', 'red')
	 $("#pwinfo").hide();
	 
	
	 $("#email").parent().append("<span id = \"emailinfo\" class =\"info\"> Email field SHOULD be a valid one having '@' character </span>").css('color', 'red')
	 $("#emailinfo").hide();
	 
	 $("#fname").parent().append("<span id = \"fnameinfo\" class =\"info\"> Firstname field MUST contain only alphabets</span>").css('color', 'red')
	 $("#fnameinfo").hide();
	 
	 $("#lname").parent().append("<span id = \"lnameinfo\" class =\"info\"> Lastname field MUST contain only alphabets</span>").css('color', 'red')
     $("#lnameinfo").hide();

	 $("#address").parent().append("<span id = \"addressinfo\" class =\"info\"> Address field MUST contain only alphanumeric characters</span>").css('color', 'red')
     $("#addressinfo").hide();
	 
	 $("#contact").parent().append("<span id = \"contactinfo\" class =\"info\"> Contact field MUST BE 10 DIGITS</span>").css('color', 'red')
	 $("#contactinfo").hide();
	 
	
	//ok
	// $("#username").parent().append("<span id = \"userok\" class =\"ok\"> OK </span>").css('color', 'red')
	//  $("#userok").hide(); 
	 
	 $("#password").parent().append("<span id = \"pwok\" class =\"ok\"> OK</span>").css('color', 'red')
	 $("#pwok").hide();
	 
	 $("#email").parent().append("<span id = \"emailok\" class =\"ok\"> OK </span>").css('color', 'red')
	 $("#emailok").hide();
	 
	 $("#fname").parent().append("<span id = \"fnameok\" class =\"ok\"> OK </span>").css('color', 'red')
	 $("#fnameok").hide(); 
	 
	 $("#lname").parent().append("<span id = \"lnameok\" class =\"ok\"> OK </span>").css('color', 'red')
	 $("#lnameok").hide(); 

	 $("#address").parent().append("<span id = \"addressok\" class =\"ok\"> OK </span>").css('color', 'red')
	 $("#addressok").hide(); 
	 
	 $("#contact").parent().append("<span id = \"contactok\" class =\"ok\"> OK </span>").css('color', 'red')
	 $("#contactok").hide(); 
	 
	  


	 //error
	//  $("#username").parent().append("<span id = \"usererror\" class =\"error\"> ERROR </span>").css('color', 'red')
	//  $("#usererror").hide(); 
	 
	 $("#password").parent().append("<span id = \"pwerror\" class =\"error\"> ERROR</span>").css('color', 'red')
	 $("#pwerror").hide();
	 
	 $("#email").parent().append("<span id = \"emailerror\" class =\"error\"> ERROR </span>").css('color', 'red')
	 $("#emailerror").hide();
	 
	 $("#fname").parent().append("<span id = \"fnameerror\" class =\"error\"> ERROR </span>").css('color', 'red')
	 $("#fnameerror").hide();
	 
	 $("#lname").parent().append("<span id = \"lnameerror\" class =\"error\"> ERROR </span>").css('color', 'red')
	 $("#lnameerror").hide();

	 $("#address").parent().append("<span id = \"addresserror\" class =\"error\"> ERROR </span>").css('color', 'red')
	 $("#addresserror").hide();
	 
	  $("#contact").parent().append("<span id = \"contacterror\" class =\"error\"> ERROR </span>").css('color', 'red')
	 $("#contacterror").hide();
	 
	
	 
	// $("#email").focus(function(){
	// 	$("#userok").hide();
	// 	$("#usererror").hide();
	// 	$("#pwinfo").hide();
	// 	$("#emailinfo").hide();
	// 	$("#userinfo").show();
	// 	$('#button').hide();

	// });

	// $("#email").blur(function(){
	// 	$("#usererror").hide();
	// 	$("#userok").hide();
	// 	$("#userinfo").hide();
	// 	var email=$("#email").val();
	// 	var username_regex= '^[a-zA-Z0-9]+$';
	// 	if(email==null || email==""){
	// 		$("#usererror").hide();
	// 		$("#userok").hide();
	// 		$("#userinfo").show();
	// 		$('#button').hide();
	// 	}
	// 	else{
	// 		if(email.match(username_regex)){
	// 			$("#usererror").hide();
	// 			$("#userok").show();
	// 			$('#button').show();
	// 		}
	// 		else{
	// 			$("#userok").hide();
	// 			$("#usererror").show();
	// 			$('#button').hide();
	// 		}
	// 	}
	// });

	$("#password").focus(function(){
		$("#pwok").hide();
		$("#pwerror").hide();
		$("#emailinfo").hide();
		$("#userinfo").hide();
		$("#pwinfo").show();
		$('#button').hide();
	});

	$("#password").blur(function(){
		$("#pwerror").hide();
		$("#pwok").hide();
		$("#pwinfo").hide();
		var password=$("#password").val();
		var password_regex= '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})';
		if(password==null || password==""){
			$("#pwerror").hide();
			$("#pwok").hide();
			$("#pwinfo").show();
			$('#button').hide();
		}
		else{

			if((password.length>=8) && (password.match(password_regex)))
			{
				$("#pwerror").hide();
				$("#pwok").show();
				$('#button').show();
			}
			else{
				$("#pwok").hide();
				$("#pwerror").show();
				$('#button').hide();
			}
		}

	});

	$("#email").focus(function(){
		$("#emailok").hide();
		$("#emailerror").hide();
		$("#userinfo").hide();
		$("#pwinfo").hide();
		$("#emailinfo").show();
		$('#button').hide();
	});

	$("#email").blur(function(){
		$("#emailerror").hide();
		$("#emailok").hide();
		$("#emailinfo").hide();
		var email=$("#email").val();
		var email_regex = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$';
		if(email==null || email==""){
			$("#emailerror").hide();
			$("#emailok").hide();
			$("#emailinfo").show();
			$('#button').hide();
		}
		else{

			if(email.match(email_regex))
			{
				$("#emailerror").hide();
				$("#emailok").show();
				$('#button').show();
			}
			else{
				$("#emailok").hide();
				$("#emailerror").show();
				$('#button').hide();
			}
		}

	});
	
	$("#fname").blur(function(){
		$("#fnameerror").hide();
		$("#fnameok").hide();
		$("#fnameinfo").hide();
		var fname=$("#fname").val();
		var fname_regex= '^[a-zA-Z]+$';
		if(fname==null || fname==""){
			$("#fnameerror").hide();
			$("#fnameok").hide();
			$("#fnameinfo").show();
			$('#button').hide();
		}
		else{
			if(fname.match(fname_regex)){
				$("#fnameerror").hide();
				$("#fnameok").show();
				$('#button').show();
			}
			else{
				$("#fnameok").hide();
				$("#fnameerror").show();
				$('#button').hide();
			}
		}
	});
	
	$("#lname").blur(function(){
		$("#lnameerror").hide();
		$("#lnameok").hide();
		$("#lnameinfo").hide();
		var lname=$("#lname").val();
		var lname_regex= '^[a-zA-Z]+$';
		if(lname==null || lname==""){
			$("#lnameerror").hide();
			$("#lnameok").hide();
			$("#lnameinfo").show();
			$('#button').hide();
		}
		else{
			if(lname.match(lname_regex)){
				$("#lnameerror").hide();
				$("#lnameok").show();
				$('#button').show();
			}
			else{
				$("#lnameok").hide();
				$("#lnameerror").show();
				$('#button').hide();
			}
		}
	});


	$("#address").blur(function(){
		$("#addresserror").hide();
		$("#addressok").hide();
		$("#addressinfo").hide();
		var address=$("#address").val();
		var add_regex= '^\d+\s+[\w\s]+,\s+[\w\s]+,\s+[\w\s]+$';
		// var add_regex= '^[a-zA-Z0-9,#&-()]+$';
		if(address==null || address==""){
			$("#addresserror").hide();
			$("#addressok").hide();
			$("#addressinfo").show();
			$('#button').hide();
		}
		// else{
		// 	if(address.match(add_regex)){
		// 		$("#addresserror").hide();
		// 		$("#addressok").show();
		// 		$('#button').show();
		// 	}
		// 	else{
		// 		$("#addressok").hide();
		// 		$("#addresserror").show();
		// 		$('#button').hide();
		// 	}
		// }
	});
	
	$("#contact").blur(function(){
		$("#contacterror").hide();
		$("#contactok").hide();
		$("#contactinfo").hide();
		var contact_regex= '^[0-9]+$';
		var contact=$("#contact").val();
		if(contact==null || contact==""){
			$("#contacterror").hide();
			$("#contactok").hide();
			$("#contactinfo").show();
			$('#button').hide();
		}
		else{

			if((contact.length==10) && (contact.match(contact_regex)) )
			{
				$("#contacterror").hide();
				$("#contactok").show();
				$('#button').show();
			}
			else{
				$("#contactok").hide();
				$("#contacterror").show();
				$('#button').hide();
			}
		}

	});
	
});
