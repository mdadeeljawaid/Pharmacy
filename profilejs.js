function fun(data){
    if(data == 'Profile'){
        document.getElementById('demo1').style.display = "block";
        document.getElementById('demo2').style.display = "none";
    }
    else if(data == 'Address'){
        document.getElementById('demo1').style.display = "none";
        document.getElementById('demo2').style.display = "block";
    }
}