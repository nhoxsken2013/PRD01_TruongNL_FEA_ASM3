const gioBatDauDi = 19;
let gioHienTai
function getCurrentTime() {
    let date = new Date();
    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}

function con_tho_an_co(hanhdongsaukhianco) {
    console.log('Khi tho bat dau an, code chay luc:',getCurrentTime())
    setTimeout(() => {
        gioHienTai = gioBatDauDi +1;
        console.log('Tho an xong , code chay luc:',getCurrentTime())
        console.log('con tho an co luc: ',gioHienTai,'\n')
        hanhdongsaukhianco()
    }, 1000);
}

function con_tho_di_xem_phim(hanhdongsaukhixemphim) {
    setTimeout(() => {
        gioHienTai = gioHienTai + 2;
        console.log('Tho xem phim xong, code chay luc:',getCurrentTime())
        console.log('con tho xem phim xong luc: ',gioHienTai,'\n')
        hanhdongsaukhixemphim()
    }, 2000);
}

function con_tho_di_dao () {
    setTimeout(() => {
        gioHienTai = gioHienTai + 1;
        console.log('Tho di dao xong, code chay luc:',getCurrentTime())
        console.log('con tho di dao xong luc: ',gioHienTai)
    }, 1000);
}

con_tho_an_co( () => {
    con_tho_di_xem_phim( () => {
        con_tho_di_dao()
    })
})