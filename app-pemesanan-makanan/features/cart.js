import { getData, url } from "../services/fetch.js"

let cart = []

export async function praCart(idProduk, qtyProduk) {
    const data = await getData(url)

    const itemMentah = data.find(obj => obj.id === idProduk)

    const item = {
        id: itemMentah.id,
        name: itemMentah.name,
        price: itemMentah.price,
        qty: qtyProduk
    }

    return item
}

export async function getCart(cart) {
    return cart
}


export async function addItem(item) {

    const cekKeranjang = cart.find(itemCart => itemCart.id === item.id)

    if (cekKeranjang === undefined) {
        cart.push(item)
    } else {
        cekKeranjang.qty += item.qty
    }

    return cart
}