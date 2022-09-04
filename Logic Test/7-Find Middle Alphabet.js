/* Given variable string contains of all alphabet from A to Z
”ABCDEFGHIJKLMNOPQRSTUVWXYZ”*/

function latihanmiddle(str) {

    var position;
    var length;

    if(str.length % 2 == 1) {
        position = str.length / 2;
        length = 1;
    } else {
        position = str.length / 2 - 1;
        length = 2;
    }

    return str.substring(position, position + length)
}
//The middle between Q and U is S
console.log(latihanmiddle("QRSTU"));
//The middle between R and U is ST
console.log(latihanmiddle("RSTU"));
//The middle between T and Z is W
console.log(latihanmiddle("TUVWXYZ"));
//The middle between Q and Z is UV
console.log(latihanmiddle("QRSTUVWXYZ"));