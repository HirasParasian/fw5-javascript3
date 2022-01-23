//1. 
const tunggu = new Promise((resolve,reject)=>{
    printSegitiga = 2
    setTimeout(() => {
        resolve(true)
        if (printSegitiga>=3){
            return printSegitiga
        }
    }, 5000)
})

async function proses(){
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
}
proses()
