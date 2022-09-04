//solution (10) // => 23 = 3 + 5 + 6 + 9
function solution(nomor) {
    let sum = 0;
    for (let i = 1; i < nomor; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }   
    }
    return sum;
}
console.log(solution(10));

//solution (20) // => 78 = 3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 
function proses(nomer) {
    let jml = 0;
    for (let i = 1; i < nomer; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            jml += i;
        }   
    }
    return jml;
}
console.log(proses(20));