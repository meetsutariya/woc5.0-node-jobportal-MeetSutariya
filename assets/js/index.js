
$("#student_login").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })


    var request = {
        "url" : `http://localhost:3000/api/student/${data.username}`,
        "method" : "GET",
        "data" : data
    }

    $.ajax(request).done(function(response){

        alert("Login Successfully!");
        window.location.replace('/');

    })

})