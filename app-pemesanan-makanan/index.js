import { addItem, praCart } from "./features/cart.js"
import { inputBeranda, pilihMakanan, inputQty, rl } from "./utils/input.js"

async function main() {
    while(true) {
        const beranda = await inputBeranda()
        if (beranda === null) {
            "Terima kasih."
            break
        }

        const produkDipilih = await pilihMakanan()
        if (produkDipilih === null) {
            continue
        }

        const qty = await inputQty(produkDipilih)
        if (qty === null) {
            continue
        }

        const itemPraCart = await praCart(produkDipilih, qty)
        console.log(itemPraCart)

        console.log("\nBerhasil ditambahkan ke keranjang.\n")

        const addCart = await addItem(itemPraCart)
        console.log("Cart update:\n", addCart)
    }
    rl.close()
}

main()