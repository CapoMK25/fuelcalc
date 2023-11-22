let res = document.getElementById('result');
            let res2 = document.getElementById("result2");
            let res3 = document.getElementById("result3");
            let res4 = document.getElementById("result4");
            let mpg = document.getElementById('mpg');
            let dist = document.getElementById('dist');
            let trip = document.getElementById('trips');


function calcCO2() {
    let x = mpg.value;
    let y = dist.value;
    let z = trips.value;
    let calc4 = (8.8/x)*1000;
    let calc = (calc4 * y)/1000;
    let calc2 = (calc * z);
    let calc3 = (calc2*52);
    calc = calc.toFixed(2);
    calc2 = calc2.toFixed(2);
    calc3 = calc3.toFixed(2);
    calc4 = calc4.toFixed(1);
    console.log('calc is: ' + calc);
    res.innerHTML = calc;
    res2.innerHTML = calc2;
    res3.innerHTML = calc3;
    res4.innerHTML = calc4;
    }