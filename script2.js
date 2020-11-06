var rez = document.getElementById('var_x');
function calc_click() {
    var a = document.getElementById('var_a').value;
    var b = document.getElementById('var_b').value;
    var c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    rez.innerHTML = c;
}


