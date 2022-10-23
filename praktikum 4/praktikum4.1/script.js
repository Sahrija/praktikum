function change(){
    const check = document.getElementById('switch');
    is_dark = check.checked
    console.log(is_dark)
    var body = document.getElementsByTagName('body')[0].style
    var bd = document.getElementsByTagName('body')[0]
    if (is_dark == true){
    body.backgroundColor='#292d3e';
    body.color='white';
    document.getElementsByTagName('a').style.color='red';
    }
    else {
    body.backgroundColor='#ffffff';
    body.color='black'
    }
}
