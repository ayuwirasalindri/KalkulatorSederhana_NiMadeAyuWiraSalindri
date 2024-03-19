function hitung() {
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    const operator = document.getElementById('operator').value;
    let hasil;

    switch (operator) {
        case 'tambah' :
            hasil = number1 + number2;
            break;
        case 'kurang' :
            hasil = number1 - number2;
            break;
        case 'kali' :
            hasil = number1 * number2;
            break;
        case 'bagi' :
            hasil = number1 / number2;
            break;
        case 'modulus' :
            hasil = number1 % number2;
            break;
        default:
            hasil = "Invalid";
            break;
    }

    document.getElementById('hasil').innerText = 'Hasil: ' + hasil;
}