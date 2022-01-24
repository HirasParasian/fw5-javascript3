const cekHariKerja = (day,jam) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
        let cek2 = jam
        let cek = dataDay.find((item) => {
            return item === day;
            });
            if(cek){
                if (cek2>=8 && cek2<=12){
                    resolve(cek)
                }else reject("bukan Jam kerja");
            }else reject("bukan Hari kerja");
      }, 1000);
    });
  };
  // 1.
  cekHariKerja('senin',7).then((resolve)=>{  //memanggil fungsi resolve dengan parameter dan inisialisasi resolve dari response
    console.log("Hari " + resolve + " adalah hari kerja") //yang dicetak jika resolve
  }).catch((err)=>{  //inisialisasi reject dari response
      console.log(err) // yang dicetak ketika reject
  })

  // // 2.
  // const proses = async (day,jam) => { // inisialisasi fungsi async
  //   try { 
  //       const resolve = await cekHariKerja(day) // menunggu hasil dari fungsi cekHariKerja  
  //       console.log("Hari " + resolve + " adalah hari kerja") //yang dicetak jika resolve
  //   }
  //   catch(err) { // inisialisasi reject dari response
  //       console.log(err) // yang dicetak ketika reject
  //   }
  // }
  // proses('sabtu,7') // memanggil fungsi async proses dengan parameter minggu yang akan di cek
