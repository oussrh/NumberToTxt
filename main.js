let uniteArray = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
let decimalArray = ['twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
let teenArray = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
//****************************************************************************************************************************** */
let uniteArrayFr = ['un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf'];
let decimalArrayFr = ['vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'septante', 'Quatre-vingt', 'nonante'];
let teenArrayFr = ['dix', 'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize', 'dix-sept', 'dix-huit', 'dix-neuf'];

let word = "";

function letConvert() {

    let inputNumber = document.querySelector('#thenumber').value;
    let taal = document.querySelector('input[name="taal"]:checked').value;

    if (taal == 'EN') {
        convertToWrd(inputNumber);
    } else if (taal == 'FR' || taal == 'BE') {
        convertToWrdFr(inputNumber, taal);
    }

    function convertToWrd(nbr) {

        if (nbr >= 1 && nbr <= 999) {
            let nbrSize = nbr.length;

            if (nbrSize == 1) {
                word = uniteArray[nbr - 1];
                document.querySelector('#result').innerHTML = word;
            } else if (nbrSize == 2) {
                word = String(nbr);
                let decimal = word.charAt(0);
                let unit = word.charAt(1);

                decimalConvert(nbr, unit, decimal);

                document.querySelector('#result').innerHTML = word;
                // let theNumber = prompt('enter a number between 0 and 999', '');
                // convertToWrd(theNumber);

            } else if (nbrSize == 3) {
                word = String(nbr);
                let hundred = word.charAt(0);
                let decimal = word.charAt(1);
                let unit = word.charAt(2);
                let nbrDec = parseInt(decimal + unit);

                if (decimal == '0' && unit == '0') {

                    document.querySelector('#result').innerHTML = uniteArray[parseInt(hundred) - 1] + ' hundred';

                } else if (decimal == '0') {

                    document.querySelector('#result').innerHTML = uniteArray[parseInt(hundred) - 1] + ' hundred and ' + uniteArray[parseInt(unit) - 1];

                } else {

                    decimalConvert(nbrDec, unit, decimal);
                    document.querySelector('#result').innerHTML = uniteArray[parseInt(hundred) - 1] + ' hundred and ' + word;
                }

                // let theNumber = prompt('enter a number between 0 and 999', '');
                // convertToWrd(theNumber);
            }
        } else if (nbr == 0) {
            document.querySelector('#result').innerHTML = 'Zero';
            let theNumber = prompt('enter a number between 0 and 999', '');
            convertToWrd(theNumber);
        } else {
            alert('enter PLEASE a number between 0 and 999');
            // let theNumber = prompt('enter a number between 0 and 999', '');
            // convertToWrd(theNumber);
        }
    }

    function decimalConvert(nbr, unit, decimal) {
        if (nbr >= 10 && nbr < 20) {
            word = teenArray[parseInt(unit)];

        } else {
            if (unit == '0') {
                word = decimalArray[parseInt(decimal - 2)];
            } else {
                word = decimalArray[parseInt(decimal - 2)] + ' ' + uniteArray[parseInt(unit) - 1];
            }

        }

    }

    //************************************************************************** */

    function convertToWrdFr(nbr, taal) {

        if (nbr >= 1 && nbr <= 999) {
            let nbrSize = nbr.length;

            if (nbrSize == 1) {
                word = uniteArrayFr[nbr - 1];
                document.querySelector('#result').innerHTML = word;
                // let theNumber = prompt('enter un numero entre 0 et 999', '');
                // convertToWrd(theNumber);

            } else if (nbrSize == 2) {
                word = String(nbr);
                let decimal = word.charAt(0);
                let unit = word.charAt(1);

                decimalConvertFr(nbr, unit, decimal);

                document.querySelector('#result').innerHTML = word;
                // let theNumber = prompt('enter un numero entre 0 et 999', '');
                // convertToWrd(theNumber);

            } else if (nbrSize == 3) {
                word = String(nbr);
                let hundred = word.charAt(0);
                let decimal = word.charAt(1);
                let unit = word.charAt(2);
                let nbrDec = parseInt(decimal + unit);

                if (decimal == '0' && unit == '0') {
                    if (hundred == '1') {
                        document.querySelector('#result').innerHTML = 'cent';
                    } else {
                        document.querySelector('#result').innerHTML = uniteArrayFr[parseInt(hundred) - 1] + ' cent';
                    }

                } else if (decimal == '0') {
                    document.querySelector('#result').innerHTML = 'cent ' + uniteArrayFr[parseInt(unit) - 1];
                } else {

                    if (hundred == '1') {
                        decimalConvertFr(nbrDec, unit, decimal);
                        document.querySelector('#result').innerHTML = 'cent ' + word;
                    } else {
                        decimalConvertFr(nbrDec, unit, decimal);
                        document.querySelector('#result').innerHTML = uniteArrayFr[parseInt(hundred) - 1] + ' cent ' + word;
                    }
                }

                // let theNumber = prompt('enter un numero entre 0 et 999', '');
                // convertToWrd(theNumber);
            }
        } else if (nbr == 0) {
            document.querySelector('#result').innerHTML = 'Zero';
            // let theNumber = prompt('enter un numero entre 0 et 999', '');
            // convertToWrd(theNumber);
        } else {
            alert('enter PLEASE a number between 0 and 999');
            // let theNumber = prompt('enter un numero entre 0 et 999', '');
            // convertToWrd(theNumber);
        }
    }

    function decimalConvertFr(nbr, unit, decimal) {
        if (nbr >= 10 && nbr < 20) {
            word = teenArrayFr[parseInt(unit)];

        } else {
            if (unit == '0') {
                    if (decimal == '7' || decimal == '9') {
                        if (taal == 'FR') {
                            word = decimalArrayFr[parseInt(decimal - 3)] + '-' + teenArrayFr[parseInt(unit)];
                        }else{
                            word = decimalArrayFr[parseInt(decimal - 2)];
                        }
                       
                    } else {
                        word = decimalArrayFr[parseInt(decimal - 2)];
                    }

            } else {
                if (decimal == '7' || decimal == '9') {

                    if (unit == '1') {
                        if (taal == 'FR') {
                        word = decimalArrayFr[parseInt(decimal - 3)] + ' et ' + teenArrayFr[parseInt(unit)];
                        }else{
                            word = decimalArrayFr[parseInt(decimal - 2)] + ' et ' + uniteArrayFr[parseInt(unit-1)];    
                        }
                    } else {
                        if (taal == 'FR') {
                        word = decimalArrayFr[parseInt(decimal - 3)] + '-' + teenArrayFr[parseInt(unit)];
                    }else{
                        word = decimalArrayFr[parseInt(decimal - 2)] + ' ' + uniteArrayFr[parseInt(unit-1)];
                    }
                    }
                } else {
                    if (unit == '1') {

                        word = decimalArrayFr[parseInt(decimal - 2)] + ' et ' + uniteArrayFr[parseInt(unit) - 1];

                    } else {

                        word = decimalArrayFr[parseInt(decimal - 2)] + '-' + uniteArrayFr[parseInt(unit) - 1];

                    }

                }
            }

        }

    }

    return false;
}

document.querySelector('button').addEventListener('click', letConvert);