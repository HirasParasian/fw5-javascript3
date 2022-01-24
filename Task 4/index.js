const fetch = require('cross-fetch')

// 
// url = 'https://jsonplaceholder.typicode.com/users'
// async function listName(){
//     const data = await fetch(url) ////membaca data dari url
//     const result = await data.json() //mengubah ke json 
//     result.forEach(item =>{ //menampilkan data secara berurutan
//         console.log(item.name)
//     })
// }
// listName()



url = 'https://jsonplaceholder.typicode.com/users'
fetch(url).then(res=>{ //membaca data dari url
    res.json().then(fin=>{ // mengubah ke json
        fin.forEach(item=>{ // menampilkan data secara berurutan 
            console.log(item.name)
        })
    })
}).catch(err=>{
    console.log(err)
})
