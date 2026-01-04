import { getData, url } from '../services/fetch.js'
import readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'

export const rl = readline.createInterface({input, output})

export async function inputBeranda() {
    console.log("\n*** Beranda ***")
    console.log("1. Pilih menu makanan/minuman")
    console.log("2. Lihat keranjang")
    console.log("3. History pesanan")
    console.log("0. Exit terminal")

    while (true) {
        const userInput = Number(await rl.question("Input: "))

        if (isNaN(userInput)) {
            console.log("Input tidak valid!")
            continue;
        }

        if (![1, 2, 3, 0].includes(userInput)) {
            console.log("Input tidak valid!")
            continue;
        }

        if (userInput === 0) {
            return null
        }

        return userInput
    }
}

export async function pilihMakanan() {
    const data = await getData(url)
    console.log("\n*** List Menu ***")
    console.log(data)

    while (true) {
        const userInput = Number(await rl.question("\nInput id produk:\n0. Kembali\n"))

        if (isNaN(userInput)) {
            console.log("Input tidak valid!")
            continue;
        }

        if (userInput === 0) {
            return null
        }

        if (userInput > data.length) {
            console.log("Produk tidak ditemukan.")
            continue;
        }

        return userInput

    }
}

export async function inputQty(produkDipilih) {
    const data = await getData(url)

    
    const namaProduk = data.find(element => element.id === produkDipilih)

    console.log(`\nAnda memilih "${namaProduk.name}"`)
    while (true) {
        const jumlahQty = Number(await rl.question("\nMasukkan jumlah produk yang ingin dibeli:\n0. Beranda\n"))
        

        if (isNaN(jumlahQty)) {
            console.log("Input tidak valid")
            continue;
        }

        if (jumlahQty === 0) {
            return null
        }

        return jumlahQty
    }
}

export async function inputHistory() {
    
}