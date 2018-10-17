let theNumber = prompt('enter un numero entre 0 et 999', '');

let word = "";



function convertToWrdFr(nbr) {

    if (nbr >= 1 && nbr <= 999) {
        let nbrSize = nbr.length;

        if (nbrSize == 1) {
            word = uniteArray[nbr - 1];
            alert(word);
            let theNumber = prompt('enter un numero entre 0 et 999', '');
            convertToWrd(theNumber);
            
        } else if (nbrSize == 2) {
            word = String(nbr);
            let decimal = word.charAt(0);
            let unit = word.charAt(1);

            decimalConvert(nbr,unit,decimal);

            alert(word);
            let theNumber = prompt('enter un numero entre 0 et 999', '');
            convertToWrd(theNumber);

        } else if (nbrSize == 3) {
            word = String(nbr);
            let hundred = word.charAt(0);
            let decimal = word.charAt(1);
            let unit = word.charAt(2);
            let nbrDec = parseInt(decimal+unit);

            if (decimal == '0' && unit == '0') {
                if(hundred == '1'){
                    alert('cent');  
                }else{
                    alert(uniteArray[parseInt(hundred) - 1] + ' cent');
                }

            } else if (decimal == '0') {
                    alert('cent ' + uniteArray[parseInt(unit) - 1]);
            } else {

                if(hundred == '1'){
                    decimalConvert(nbrDec,unit,decimal);
                    alert('cent ' + word);
                }else{
                    decimalConvert(nbrDec,unit,decimal);
                alert(uniteArray[parseInt(hundred) - 1] + ' cent ' + word);
                }
            }

            let theNumber = prompt('enter un numero entre 0 et 999', '');
            convertToWrd(theNumber);
        }
    } else if (nbr == 0) {
        alert('Zero');
        let theNumber = prompt('enter un numero entre 0 et 999', '');
        convertToWrd(theNumber);
    } else {
        alert('enter PLEASE a number between 0 and 999');
        let theNumber = prompt('enter un numero entre 0 et 999', '');
        convertToWrd(theNumber);
    }
}

function decimalConvertFr(nbr,unit,decimal) {
    if (nbr >= 10 && nbr < 20) {
        word = teenArray[parseInt(unit)];

    } else {
        if (unit == '0') {
            if(decimal == '7' || decimal == '9' ){
                word = decimalArray[parseInt(decimal - 3)]+'-'+teenArray[parseInt(unit)];
            }
            else{
                word = decimalArray[parseInt(decimal - 2)];
            }
           
        } else {

            if(decimal == '7' || decimal == '9' ){

                if(unit== '1'){
                    word = decimalArray[parseInt(decimal - 3)] +' et '+ teenArray[parseInt(unit)];

                }else{
                    word = decimalArray[parseInt(decimal - 3)] +'-'+ teenArray[parseInt(unit)];

                }
            }

            else{
                if(unit== '1'){

                word = decimalArray[parseInt(decimal - 2)] + ' et ' + uniteArray[parseInt(unit) - 1];
                
                }else{
                
                word = decimalArray[parseInt(decimal - 2)] + '-' + uniteArray[parseInt(unit) - 1];

                }
            
            }
        }

    }

}


convertToWrd(theNumber);