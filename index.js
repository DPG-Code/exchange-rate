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


// DARK MODE

const switchBtn = document.getElementById("switch")
const amount = document.getElementById("amount")
const from = document.querySelector(".from")
const to = document.querySelector(".to")
const submit = document.getElementById("submit")
const btnDark = document.querySelector(".btn-dark")
const btnLight = document.querySelector(".btn-light")

switchBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark")
    result.classList.toggle("dark")
    amount.classList.toggle("dark")
    from.classList.toggle("dark")
    to.classList.toggle("dark")
    submit.classList.toggle("dark")
    btnDark.classList.toggle("dark")
    btnLight.classList.toggle("dark")

    //LOCAL STORAGE
    if(document.body.classList.contains("dark")){
        localStorage.setItem("dark-mode", "true")
    }
    else{
        localStorage.setItem("dark-mode", "false")
    }
})

//LOCAL STORAGE
if(localStorage.getItem("dark-mode") === "true"){
    document.body.classList.add("dark")
    result.classList.add("dark")
    amount.classList.add("dark")
    from.classList.add("dark")
    to.classList.add("dark")
    submit.classList.add("dark")
    btnDark.classList.add("dark")
    btnLight.classList.add("dark")
}
else{
    document.body.classList.remove("dark")
    result.classList.remove("dark")
    amount.classList.remove("dark")
    from.classList.remove("dark")
    to.classList.remove("dark")
    submit.classList.remove("dark")
    btnDark.classList.remove("dark")
    btnLight.classList.remove("dark")
}