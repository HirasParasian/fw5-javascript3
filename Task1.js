  const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
        let cek = dataDay.find((item) => {
          return item === day;
        });
        if (cek) {
          resolve(cek);
        } else {
          reject(new Error("Hari ini bukan hari kerja"));
        }
      }, 3000);
    });
  };
  // 1.
  cekHariKerja('sabtu').then((resolve)=>{  //memanggil fungsi resolve dengan parameter dan inisialisasi resolve dari response
    console.log("Hari " + resolve + " adalah hari kerja") //yang dicetak jika resolve
  }).catch((err)=>{  //inisialisasi reject dari response
      console.log(err) // yang dicetak ketika reject
  })

  // // 2.
  // const proses = async (day) => { // inisialisasi fungsi async
  //   try { 
  //       const resolve = await cekHariKerja(day) // menunggu hasil dari fungsi cekHariKerja  
  //       console.log("Hari " + resolve + " adalah hari kerja") //yang dicetak jika resolve
  //   }
  //   catch(err) { // inisialisasi reject dari response
  //       console.log(err) // yang dicetak ketika reject
  //   }
  // }
  // proses('sabtu') // memanggil fungsi async proses dengan parameter minggu yang akan di cek
