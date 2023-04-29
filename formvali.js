var nameerror = document.getElementById('name-error');
var phoneerror = document.getElementById('phone-error');
var emailerror = document.getElementById('email-error');
var messageerror = document.getElementById('message-error');
var submiterror = document.getElementById('submit-error');

function validatename(){
    var name = document.getElementById('contact-name').value;

    if(name.length == 0){
        nameerror.innerHTML = 'name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameerror.innerHTML = 'write full name';
        return false;
    }
    nameerror.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validatephone(){
    var phone = document.getElementById('contact-phone').value;

    if(phone.length ==0){
        phoneerror.innerHTML = 'phone no is required';
        return false;
    }

    if(phone.length !== 10){
        phoneerror.innerHTML = ' should be 10 digits';
        return false;
    }

    if(!phone.match(/^[0-9]{10}$/)){
        phoneerror.innerHTML = 'only digits please';
        return false;
    }

    phoneerror.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateemail(){
    var email = document.getElementById('contact-email').value;

    if(email.length == 0 ){
        emailerror.innerHTML = 'email is required';
        return false;
    }

    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailerror.innerHTML = 'email invalid';
        return false;
    }
    emailerror.innerHTML ='<i class="fas fa-check-circle"></i>';
    return true;
}

function validatemessage(){
    var message = document.getElementById('contact-message').value;
    var required = 30;
    var left = required - message.length;

    if(left>0){
        messageerror.innerHTML = left + 'more characters required';
        return false;
    }
    messageerror.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateform(){
    if(!validatename() || !validatephone() || validateemail() || validatemessage()){
        submiterror.style.display = 'block';
        submiterror.innerHTML = 'please fix the error to submit';
        setTimeout(function(){submiterror.style.display = 'none';}, 3000);
        return false;
    }
}