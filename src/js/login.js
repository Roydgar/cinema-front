function login() {
    var url = 'http://localhost:8080/cinema/user/login';
    var userData = {
        email: document.getElementById('login-email').value,
        password: document.getElementById('login-password').value
    };

    $.ajax({
        type: 'POST',
        url: url,
        contentType: 'application/json; charset=utf-8',
        data: JSON.stringify(userData),
        success: function(data, textStatus, request){
            document.getElementById('error-message').textContent= '';
        },
        error: function (request, textStatus, errorThrown) {
            document.getElementById('error-message').textContent= request.getResponseHeader('error-message');
        }
    });

}