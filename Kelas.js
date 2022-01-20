// setTimeout(() => {
//     console.log("Hai")
// }, 1000);
// console.log("Hallo")

// const tunggu = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         console.log("Hai")
//         resolve(true)
//     }, 1000);
// })
// tunggu.then(()=>{
//     console.log("Halo")
// })

// const tunggu = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         console.log("Hai")
//         resolve(true)
//     }, 1000);
// })
// async function proses(){
//     const proc = await tunggu  // menunggu fungsi tunggu selesai
//     console.log("hallo")
// }
// proses()

// const tunggu = new Promise((resolve, reject)=>{
//     reject(false)
//     setTimeout(() => {
//         console.log("Hai")
//         resolve(true)
//     }, 1000);
//     }).catch(()=>{
//         console.log("hello")
//     })
// async function proses(){
//     const proc = await tunggu  // menunggu fungsi tunggu selesai
//     console.log("hallo")
// }
// proses()

// const tunggu = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve()
//     }, 1000);
// })
// async function proses(){
//     try {
//         const results = await tunggu
//         console.log(results)
//         console.log("halo")
//     }catch(err){
//     console.log(err)
//     }
// }