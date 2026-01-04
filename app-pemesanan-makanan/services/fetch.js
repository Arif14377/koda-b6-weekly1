export const url = "https://raw.githubusercontent.com/Arif14377/koda-b6-weekly1/refs/heads/main/data.json"

export async function getData(url) {
    const response = await fetch(url)

    if (!response.ok) {
        throw new Error("HTTP Error ", response.status)
    }

    const data = await response.json()
    return data
}