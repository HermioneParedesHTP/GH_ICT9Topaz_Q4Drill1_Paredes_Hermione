// computing for the electricity consumption
function electricity_cons() {
    let consumption = document.getElementById('consumption').value;

    switch (true) {
        case (consumption > 499):
            document.getElementById('consumption1').innerHTML = 'Your electricity consumption is VERY high.';
            break;
        case (consumption > 300 && consumption < 500):
            document.getElementById('consumption1').innerHTML = 'Your electricity consumption is high.';
            break;
        case (consumption > 200 && consumption < 301):
            document.getElementById('consumption1').innerHTML = 'Your electricity consumption is average.';
            break;
        case (consumption > 0 && consumption < 101):
            document.getElementById('consumption1').innerHTML = 'You have little to no electricity consumption.';
            break;
    }
}