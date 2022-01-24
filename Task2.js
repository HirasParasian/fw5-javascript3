const getmonth = (callback) => { //deklarasi getmont dengan parameter callback
    setTimeout(() => { // deklarasi timer
      let error = false; //tidak mungkin masuk ke error
      let month = ['Januari', 'Februari', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'Desember'];
      if (!error) {
        callback(null, month)
      } else {
        callback(new Error('Sorry Data Not Found', []))
      }
    }, 4000)
  }

  getmonth((error,item)=>{
      if (error){
          console.log(error)
      }else{
          item.map(el=>{ //menapilkan data 
              console.log(el)
          })
      }
  })