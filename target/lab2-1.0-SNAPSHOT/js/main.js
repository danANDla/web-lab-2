var x = document.getElementById("x-input");
var y = document.getElementById("y-input");

//-----------------------------validation--------------------------------
function validation(){
    console.log('validation func');
    let r = $("input[name='r-input']:checked").val();
    if (typeof r == 'undefined') {
        r = '';
    }
    console.log(x.value);
    console.log(y.value);
    console.log(r);

    let x_flag = true;
    let y_flag = true;
    let r_flag = true;

    if (y.value === ''){
        y_flag = false;
        document.getElementById("y-invite").style.color = "#AC2205";
        document.getElementById("y-invite").style.fontWeight = "300";
    }
    else{
        document.getElementById("y-invite").style.color = "white";
        document.getElementById("y-invite").style.fontWeight = "300";
    }
    if (x.value === '' || x.value>30 || x.value<-3 || isNaN(x.value)){
        x_flag = false;
        if(x.value === ''){
            document.getElementById("x-invite").style.color = "#AC2205";
            document.getElementById("x-invite").style.fontWeight = "300";
            document.getElementById("x-err").innerHTML = "";
        }
        else{
            document.getElementById("x-invite").style.color = "white";
            document.getElementById("x-invite").style.fontWeight = "300";
            document.getElementById("x-err").innerHTML = "(value should be a number from (-3;3)";
        }
    }
    else{
        document.getElementById("x-invite").style.color = "white";
        document.getElementById("x-invite").style.fontWeight = "300";
        document.getElementById("x-err").innerHTML = "";
    }
    if (r === ''){
        r_flag = false;
        document.getElementById("r-invite").style.color = "#AC2205";
        document.getElementById("r-invite").style.fontWeight = "300";
    }
    else{
        document.getElementById("r-invite").style.color = "white";
        document.getElementById("r-invite").style.fontWeight = "300";
    }
    return(x_flag && y_flag && r_flag);
}

//-----------------------------submit--------------------------------
$( document ).ready(function() {
    $((document).getElementById('submit-btn')).on('click', function (event){
        event.preventDefault();
        submit();
    })
})



function submit(){
    if(validation()){
        console.log('submitted');
        let r = $("input[name='r-input']:checked").val();
        if (typeof r == 'undefined') {
            r = '';
        }
        let xval = x.value;
        let yval = y.value;
        let rval = r.toString();
        $.ajax({
            url: "ControllerServlet",
            type: "GET",
            data: {
                xval: xval,
                yval: yval,
                rval: rval
            },
            async: true,
            cache: false,
            success: function (response){
                if(response === "invalid values"){
                    document.getElementById("x-invite").style.color = "#AC2205";
                    document.getElementById("x-invite").style.fontWeight = "normal";

                    document.getElementById("y-invite").style.color = "#AC2205";
                    document.getElementById("y-invite").style.fontWeight = "normal";

                    document.getElementById("r-invite").style.color = "#AC2205";
                    document.getElementById("r-invite").style.fontWeight = "normal";
                }
                else{
                    $('html').html(response);
                    console.log('success request');
                    let msg = "";
                    $('#post').html(msg);
                }
            },
            error: function (jqXHR, exception) {
                let msg = '';
                if (jqXHR.status === 0) {
                    msg = 'Not connect.\n Verify Network.';
                } else if (jqXHR.status == 404) {
                    msg = 'Requested page not found [404]';
                } else if (jqXHR.status == 500) {
                    msg = 'Internal Server Error [500]';
                } else if (exception === 'parsererror') {
                    msg = 'Requested JSON parse failed';
                } else if (exception === 'timeout') {
                    msg = 'Time out error';
                } else if (exception === 'abort') {
                    msg = 'Ajax request aborted';
                } else {
                    msg = 'Uncaught Error.\n' + jqXHR.responseText;
                }
                $('#post').html(msg);
            },
        })
    }
    else{
        console.log('invalid');
    }
}

//-----------------------------clear table--------------------------------
$( document ).ready(function() {
    $((document).getElementById('clear-btn')).on('click', function (event){
        event.preventDefault();
        clear();
        console.log('cleared');
    })
})

function clear(){

}

//-----------------------------restore table--------------------------------
$(document).ready(function () {
    restore();
    console.log('restored');
})

function restore(){

}

//-----------------------------reset--------------------------------
$( document ).ready(function() {
    $((document).getElementById('reset-btn')).on('click', function (event){
        event.preventDefault();
        reset();
        console.log('resetted');
    })
})

function reset(){
    $("input[name='r-input']:checked").prop('checked', false);
    x.value = '';
    y.value = '';
    document.getElementById("x-invite").style.color = "white";
    document.getElementById("x-invite").style.fontWeight = "300";
    document.getElementById("x-err").innerHTML = "";
    document.getElementById("y-invite").style.color = "white";
    document.getElementById("y-invite").style.fontWeight = "300";
    document.getElementById("r-invite").style.color = "white";
    document.getElementById("r-invite").style.fontWeight = "300";
}

