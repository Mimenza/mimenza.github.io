
(function ($) {

    $(".Login-btn").click(function () {

        input_username = $('#login-user').val()
        input_pass = $('#login-pass').val()

        if(input_username.length == 0 || input_pass.length == 0){
            alert('Uno o mas campos no se han completado')
        }
        else{
            checkUserPass()
        }

    });


})(jQuery);


function checkUserPass(){

    
}
