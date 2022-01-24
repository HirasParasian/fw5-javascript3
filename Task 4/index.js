const fetch = require('cross-fetch')

// 
// url = 'https://jsonplaceholder.typicode.com/users'
// async function listName(){
//     const data = await fetch(url) 
//     const result = await data.json()
//     result.forEach(item =>{
//         console.log(item.name)
//     })
// }
// listName()



url = 'https://jsonplaceholder.typicode.com/users'
fetch(url).then(res=>{
    res.json().then(fin=>{
        fin.forEach(item=>{
            console.log(item.name)
        })
    })
}).catch(err=>{
    console.log(err)
})
