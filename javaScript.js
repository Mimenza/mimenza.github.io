
(function ($) {

    $(".Login-btn").click(function () {

        input_username = $('#login-user').val()
        input_pass = $('#login-pass').val()

        if(input_username.length == 0 || input_pass.length == 0){
            alert('Un elemento no se ha completado')
        }
        else{
            checkUserPass()
        }

    });


})(jQuery);


function checkUserPass(){

    
}