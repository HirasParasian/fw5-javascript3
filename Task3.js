 const tunggu = new Promise((resolve,reject)=>{
    printSegitiga = 3
    setTimeout(() => {
        if (printSegitiga>=3){
            resolve(printSegitiga)
        } else reject ("Kurang Banyak")
    }, 5000)
})

async function proses(){
    try{
    const proc = await tunggu
    if (typeof printSegitiga == "number" ){
        let hasil = '';
        for (let i = printSegitiga; i >= 1; i--) {
            for (let j = 1; j <= i; j++) {
                hasil = hasil + j + " ";
            }
            hasil += '\n';
        }
    console.log(hasil);
    } else {
        console.log("Harus Angka")
    }
    }catch(err) { // inisialisasi reject dari response
        console.log(err) // yang dicetak ketika reject
    }
}
proses()
