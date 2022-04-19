const gioBatDauDi = 19;
let gioHienTai
function getCurrentTime() {
    let date = new Date();
    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}

function con_tho_an_co(gioBatDauDi) {
    return new Promise( (resolve, reject) => {
        console.log('Khi tho bat dau an, code chay luc:',getCurrentTime())
        setTimeout(() => {
            
            const duocDiChoi = Math.random() >= 0.2;
            if(duocDiChoi)
            {
                console.log('Tho an xong , code chay luc:',getCurrentTime())
                gioHienTai = gioBatDauDi +1;
                console.log('con tho an co luc: ',gioHienTai,'H\n')
                resolve(gioHienTai)
            }
            else{
                reject('me khong cho di')
            }
        }, 1000);
    })
}

function con_tho_di_xem_phim() {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            console.log('Tho xem phim xong, code chay luc:',getCurrentTime())
            gioHienTai = gioHienTai + 2;
            console.log('con tho di xem phim xong luc: ',gioHienTai,'H\n')
            resolve(gioHienTai)
        }, 2000);
    })
}

function con_tho_di_dao () {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            console.log('Tho di dao xong, code chay luc:',getCurrentTime())
            gioHienTai = gioHienTai + 1;
            console.log('con tho di dao xong luc: ',gioHienTai,'H')
            resolve(gioHienTai)
        }, 1000); 
    })
}

con_tho_an_co(gioBatDauDi)
.then( () => {
    return con_tho_di_xem_phim()
})
.then( () => {
    return con_tho_di_dao()
})
.catch( (lydokhong) => {
    console.log(lydokhong)
 })