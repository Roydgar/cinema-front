function register() {
    var url = 'http://localhost:8080/cinema/user/register';
    var user = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    };

    $.ajax({
        type: 'POST',
        url: url,
        contentType: 'application/json; charset=utf-8',
        data: JSON.stringify(user),
        success: function(data, textStatus, request){
            location.reload();
            document.getElementById('error-message').textContent= '';
        },
        error: function (request, textStatus, errorThrown) {
            document.getElementById('error-message').textContent= request.getResponseHeader('error-message');
        }
    });
}