
(function ($) {

    $(".Login-btn").click(function () {

        console.log('asdfasdf')
        
        input_username = $('#login-user').val()
        input_pass = $('#login-pass').val()

        if (input_username.length == 0 || input_pass.length == 0) {

            alert('Uno o mas campos no se han completado')
        }
        else {
            checkUserPass(input_username, input_pass)
        }

    });


})(jQuery);

var cipher_pass = [101,110,100,105,107,97,109,105,109,101,110,122,97,108,111,98,97,116,111]

function checkUserPass( user, pass){

    var splitPass = pass.split('')

    for (let i = 0; i < splitPass.length; i++) {
       
        splitPass[i] = splitPass[i].charCodeAt(0)
    }
  
    if(JSON.stringify(cipher_pass) === JSON.stringify(splitPass)){

        access = true    

        window.location.href = "WebPage/html/indexRework.html"
        
    }else{
        alert('ERROR')
    }

}


