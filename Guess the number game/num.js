function Guess() {
    var from1 = parseInt(document.getElementById("from1").value);
    var from2 = parseInt(document.getElementById("from2").value);
    var uservalue = parseInt(document.getElementById('from3').value);

    if (isNaN(from1) || isNaN(from2)) {
        document.getElementById("result").innerHTML = "Please enter valid numbers for range";
        return;
    }

    var target = Math.floor(Math.random() * (from2 - from1 + 1)) + from1;
    if(uservalue===target) {
        document.getElementById('result').innerHTML = "Well Done! It took you 1 attempts to guess this number.";
    } else if(uservalue<= target) {
        document.getElementById('result').innerHTML='My number is greater than '+ uservalue;
    } else if(uservalue >= target) {
        document.getElementById('result').innerHTML="My number is less than "+uservalue;
    }
    
}

