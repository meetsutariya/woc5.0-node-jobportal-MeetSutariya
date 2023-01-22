
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

$("#student_signup").submit(function(event){
    
    alert("Register Successfully!");

})

$("#company_login").submit(function(event){
    event.preventDefault();

    var unindexed_array_ = $(this).serializeArray();
    var data_ = {}

    $.map(unindexed_array_, function(n, i){
        data_[n['name']] = n['value']
    })

    

    var request = {
        "url" : `http://localhost:3000/api/company/${data_.company_name}`,
        "method" : "GET",
        "data" : data_
    }

    $.ajax(request).done(function(response){

        alert("Login Successfully!");
        window.location.replace('/');

    })

})

$("#company_signup").submit(function(event){
    
    alert("Register Successfully!");

})