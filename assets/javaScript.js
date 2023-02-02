(function ($) {

    $(".Login-btn").click(function () {
   
        console.log('click')
        
         var input_username = $('#login-user').val()
         var input_pass = $('#login-pass').val()

        if (input_username.length == 0 || input_pass.length == 0) {

            alert('Uno o mas campos no se han completado')
        }
        else {
            checkUserPass(input_username, input_pass)
        }

    });


})(jQuery);


var access;
var grantAccess = false  //true=redirects to index / false= have to write the pass and user

if(grantAccess == true){
        window.location.href = "Page/html/home.html"         
        access = 1
        sessionStorage.setItem('accessKey', access)
    
    }

var cipher_name = [ 97, 100, 109, 105, 110 ]
var cipher_pass = [101,110,100,105,107,97,109,105,109,101,110,122,97,108,111,98,97,116,111]

function checkUserPass( user, pass){
    var splitName = user.split('')
    var splitPass = pass.split('')

    for (let i = 0; i < splitPass.length; i++) {
       
        splitPass[i] = splitPass[i].charCodeAt(0)
    }

    for (let i = 0; i < splitName.length; i++) {
        
        splitName[i] = splitName[i].charCodeAt(0)
    }

    access = 0

    if((JSON.stringify(cipher_pass) === JSON.stringify(splitPass) && JSON.stringify(cipher_name) === JSON.stringify(splitName))&& grantAccess == false ){
  
        access = 1
        sessionStorage.setItem('accessKey', access)

         window.location.href = "Page/html/home.html" 
     
    }else{
        alert('ERROR')        
    }
}






