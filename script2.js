var rez = document.getElementById('var_x');
console.log("start");

function calc_click() {
    var a = document.getElementById('var_a').value;
    var b = document.getElementById('var_b').value;

        if (a > b) {
            var c = Math.sqrt(Math.pow(a, 2) - Math.pow(b, 2));
        }
        else {
            var c = "Гіпотенуза не може бути меншою від катета!"
        }

        rez.innerHTML = c;
    
}


