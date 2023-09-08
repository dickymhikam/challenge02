const dataPenjualanPakAldi =[
    {
        namaProduct : 'Sepatu Futsal Nike Vipor Acadmy 8',
        hargaSatuan : 760000,
        kategori    : "sepatu Sport",
        totalTerjual: 90,
    },
    {
        namaProduct : 'Sepatu Warrior Trsistan Black Brow High - Original',
        hargaSatuan : 960000,
        kategori    : "Sepatu Sneakert",
        totalTerjual: 37,
    },
    {
        namaProduct : 'Sepatu Warrior Trsistan MAroon Brow High - Original',
        hargaSatuan : 360000,
        kategori    : "Sepatu Sneakert",
        totalTerjual: 90,
    },
    {
        namaProduct : 'Sepatu Warrior Rainbow Tosca Corduroy - [BNIB] Original',
        hargaSatuan : 120000,
        kategori    : "Sepatu Sneakert",
        totalTerjual: 90,
    }
]


function getTotalPenjualan(dataPenjualanPakAldi) {

    const total = dataPenjualanPakAldi.map(a => a.totalTerjual).reduce((acc,curr)=> acc + curr);
    return total

}

console.log(getTotalPenjualan(dataPenjualanPakAldi))