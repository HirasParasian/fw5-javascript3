 const tunggu = new Promise((resolve,reject)=>{
    printSegitiga = "30" //inisialisasi variabel
    setTimeout(() => { //timer
        if (printSegitiga>=3){ // cek apakah printSegitiga >=3 
            resolve(printSegitiga)// jika iya maka resolve adalaha printSegitiga tersebut
        } else reject ("Kurang Banyak") //jika tidak maka reject akan output "kurang banyak"
    }, 1000) //delay 1 detik
})

async function proses(){
    try{
    const proc = await tunggu //menunggu proses tunggu
    if (typeof printSegitiga == "number" ){ //cek tipe data apakah number
        let hasil = ''; //inisialisasi hasil
        for (let i = printSegitiga; i >= 1; i--) { //for loop
            for (let j = 1; j <= i; j++) { //for loop
                hasil = hasil + j + " ";
            }
            hasil += '\n';
        }
    console.log(hasil);
    } else {
        console.log("Harus Angka") //jika tipe data bukan number
    }
    }catch(err) { // inisialisasi reject dari response
        console.log(err) // yang dicetak ketika reject
    }
}
proses()
