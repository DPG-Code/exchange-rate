const url = 'v6.exchangerate-api.com'
const key = '6ffbb55b39c216b5678b3fc1'

const form = document.getElementById("form")
let amountInitial = document.getElementById("amountInitial")
let result = document.getElementById("result")
let dataToConvert;

async function convertMoney() {
    const amount = Object.values(dataToConvert)[0]
    const from = Object.values(dataToConvert)[1]
    const to = Object.values(dataToConvert)[2]
    let data = undefined

    try{
        const response = await fetch(`https://${url}/v6/${key}/pair/${from}/${to}/${amount}`)
        data = await response.json()
        let convert = data.conversion_result.toFixed(2)
        amountInitial.innerHTML = `${amount} ${from} =`
        result.innerHTML = `${convert} ${to}`
    }
    catch (error){
        console.log(error)
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const newData = Object.fromEntries(
        new FormData(e.target)
    )
    dataToConvert = newData
    convertMoney()
})