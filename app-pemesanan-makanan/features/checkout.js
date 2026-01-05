// isi keranjang dummy
const isiKeranjang = [
    {
        id: 1,
        name: "Bakso",
        price: 20000,
        qty: 2
    },
    {
        id: 2,
        name: "Mie Ayam",
        price: 15000,
        qty: 3
    },
]

export async function totalHarga(isiKeranjang) {
    const jumlahHarga = isiKeranjang.map(harga => harga.price * harga.qty)
    let totalHarga = 0

    for (let i=0; i<jumlahHarga.length; i++) {
        totalHarga += jumlahHarga[i]
    }

    return totalHarga
}

async function main() {
    const total = await totalHarga(isiKeranjang)
    console.log(total)
}

main()