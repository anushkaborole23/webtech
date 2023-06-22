function show(param_div_id) {
    document.getElementById('main_place').innerHTML = document.getElementById(param_div_id).innerHTML;
  }

function scrool(){
    pi=document.getElementById('01').src
    
    
    if (pi=='http://127.0.0.1:5501/x1.png'){
        document.getElementById('01').src='./x2.png'
    }
    else if (pi=='http://127.0.0.1:5501/x2.png'){
        document.getElementById('01').src='./x3.png'
    }
    else if (pi=='http://127.0.0.1:5501/x3.png'){
        document.getElementById('01').src='./x1.png'
    }

}
