$(document).ready(function() {
    var date = new Date();
    var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];


    document.getElementById('day-1').textContent= date.getDate() + ' ' + monthNames[date.getMonth()];
    date.setDate(date.getDate() + 1);
    document.getElementById('day-2').textContent= date.getDate() + ' ' + monthNames[date.getMonth()];
    date.setDate(date.getDate() + 1);
    document.getElementById('day-3').textContent= date.getDate() + ' ' + monthNames[date.getMonth()];
    date.setDate(date.getDate() + 1);
    document.getElementById('day-4').textContent= date.getDate() + ' ' + monthNames[date.getMonth()];
    date.setDate(date.getDate() + 1);
    document.getElementById('day-5').textContent= date.getDate() + ' ' + monthNames[date.getMonth()];
    date.setDate(date.getDate() + 1);
    document.getElementById('day-6').textContent= date.getDate() + ' ' + monthNames[date.getMonth()];

});

function yyyymmdd(date) {
    var mm = date.getMonth() + 1; // getMonth() is zero-based
    var dd = date.getDate();

    return [date.getFullYear(), '-',
        (mm>9 ? '' : '0') + mm, '-',
        (dd>9 ? '' : '0') + dd
    ].join('');
}

function getMoviesByDate(date) {
    console.log(date);
    var firstTime = true;

    $.getJSON( 'http://localhost:8080/cinema/session?date=' + yyyymmdd(date), function( data ) {
        var items = [];
        $.each( data, function( key, val ) {
            var previousContent = $("#movies").html();
            console.log(val.movie.name);
            var newContent = '<div class="item  col-xs-4 col-lg-4">\n' +
                '                <div class="thumbnail">\n' +
                '                    <img class="group list-group-image" src="http://placehold.it/400x250/000/fff" alt="" />\n' +
                '                    <div class="caption">\n' +
                '                        <h4 class="group inner list-group-item-heading">\n' +
                '                           '+ val.movie.name + '</h4>\n' +
                '                        <p class="group inner list-group-item-text">\n' +
                '                          ' + val.movie.description + '</p>\n' +
                '                        <div class="row">\n' +
                '                            <div class="col-xs-12 col-md-6">\n' +
                '                                <p class="lead">\n' +
                '                                    $21.000</p>\n' +
                '                            </div>\n' +
                '                            <div class="col-xs-12 col-md-6">\n' +
                '                                <a class="btn btn-success" href="http://www.jquery2dotnet.com">Buy ticket</a>\n' +
                '                            </div>\n' +
                '                        </div>\n' +
                '                    </div>\n' +
                '                </div>\n' +
                '            </div>';
            if (firstTime) {
                $("#movies").html(newContent);
            } else {
                $("#movies").html(previousContent + newContent);

            }

            firstTime = false;
        });

    });
    if (firstTime) {
        $("#movies").html('');

    }
}

function getMoviesByDay1() {
    getMoviesByDate(new Date())
}

function getMoviesByDay2() {
    var date = new Date();
    date.setDate(date.getDate() + 1);
    getMoviesByDate(date);
}

function getMoviesByDay3() {
    var date = new Date();
    date.setDate(date.getDate() + 2);
    getMoviesByDate(date);
}

function getMoviesByDay4() {
    var date = new Date();
    date.setDate(date.getDate() + 3);
    getMoviesByDate(date);
}

function getMoviesByDay5() {
    var date = new Date();
    date.setDate(date.getDate() + 4);
    getMoviesByDate(date);
}

function getMoviesByDay6() {
    var date = new Date();
    date.setDate(date.getDate() + 5);
    getMoviesByDate(date);
}