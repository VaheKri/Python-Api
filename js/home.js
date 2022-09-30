const form = document.querySelector(".form")
const btnForm = document.querySelector("#btnForm")
const close = document.querySelector("#close")
const country_name = document.getElementById("Nom-du-Pays")
const population = document.getElementById("Population")
const paths = document.querySelectorAll(".map > svg > path")


paths.forEach(function (path, index) {
    path.addEventListener("click", async function () {
        let country = await (await fetch(`http://127.0.0.1:8000/countrys/${path.parentNode.id}`)).json()
        let pop = await (await fetch(`http://127.0.0.1:8000/populations/${country['id']}`)).json()
        const inputs = document.querySelectorAll(".forms > .form-group > input")

        inputs[1].value = pop['amount']
        inputs[2].value = country["capital"]
        inputs[3].value = country["president"]
        inputs[4].value = country["national_day"]
        inputs[5].value = country["currency"]
        inputs[6].value = country["area"]

        form.style.opacity = "1"
        form.style.zIndex = "10"
        form.style.userSelect = "all"
        close.style.opacity = "1"
        close.style.zIndex = "10"
        close.style.userSelect = "contain"
        country_name.value = path.parentNode.id
        population.focus()
    })

    path.addEventListener("mouseover", function () {
        path.parentNode.style.zIndex = 1
    })

    path.addEventListener("mouseleave", function () {
        path.parentNode.style.zIndex = 0
    })
})

close.addEventListener("click", function () {
    form.style.opacity = "0"
    form.style.zIndex = "-1"
    form.style.userSelect = "none"
})

document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        form.style.opacity = "0";
        form.style.zIndex = "-1";
        form.style.userSelect = "none";
    }
});

btnForm.addEventListener("click", async function () {
    console.log("test")
})

async function get_populations() {
    data = await (await fetch("http://127.0.0.1:8000/populations")).json()

    data.forEach(function (country, index) {
        document.getElementById("FrancePopulation").innerHTML = data[0]["amount"]
        document.getElementById("EspagnePopulation").innerHTML = data[1]["amount"]
        document.getElementById("PortugalPopulation").innerHTML = data[2]["amount"]
        document.getElementById("AllemagnePopulation").innerHTML = data[3]["amount"]
        document.getElementById("ItaliePopulation").innerHTML = data[4]["amount"]
        document.getElementById("EtatUnisPopulation").innerHTML = data[5]["amount"]
        document.getElementById("GroenlandPopulation").innerHTML = data[6]["amount"]
        document.getElementById("AlaskaPopulation").innerHTML = data[7]["amount"]
        document.getElementById("CanadaPopulation").innerHTML = data[8]["amount"]
        document.getElementById("MexiquePopulation").innerHTML = data[9]["amount"]
        document.getElementById("RoyaumeUniPopulation").innerHTML = data[10]["amount"]
    })
}
get_populations()

async function get_countrys() {
    data = await (await fetch("http://127.0.0.1:8000/countrys")).json()

    data.forEach(function (country, index) {
        document.getElementById("FranceCapital").innerHTML = data[0]["capital"]
        document.getElementById("FranceName").innerHTML = data[0]["name"]
        document.getElementById("FrancePresident").innerHTML = data[0]["president"]
        document.getElementById("FranceDay").innerHTML = data[0]["national_day"]
        document.getElementById("FranceArea").innerHTML = data[0]["area"] + " km²"
        document.getElementById("FranceCurrency").innerHTML = data[0]["currency"]

        document.getElementById("AllemagneCapital").innerHTML = data[1]["capital"]
        document.getElementById("AllemagneName").innerHTML = data[1]["name"]
        document.getElementById("AllemagnePresident").innerHTML = data[1]["president"]
        document.getElementById("AllemagneDay").innerHTML = data[1]["national_day"]
        document.getElementById("AllemagneArea").innerHTML = data[1]["area"] + " km²"
        document.getElementById("AllemagneCurrency").innerHTML = data[1]["currency"]

        document.getElementById("EspagneCapital").innerHTML = data[2]["capital"]
        document.getElementById("EspagneName").innerHTML = data[2]["name"]
        document.getElementById("EspagnePresident").innerHTML = data[2]["president"]
        document.getElementById("EspagneDay").innerHTML = data[2]["national_day"]
        document.getElementById("EspagneArea").innerHTML = data[2]["area"] + " km²"
        document.getElementById("EspagneCurrency").innerHTML = data[2]["currency"]

        document.getElementById("ItalieCapital").innerHTML = data[3]["capital"]
        document.getElementById("ItalieName").innerHTML = data[3]["name"]
        document.getElementById("ItaliePresident").innerHTML = data[3]["president"]
        document.getElementById("ItalieDay").innerHTML = data[3]["national_day"]
        document.getElementById("ItalieArea").innerHTML = data[3]["area"] + " km²"
        document.getElementById("ItalieCurrency").innerHTML = data[3]["currency"]

        document.getElementById("PortugalCapital").innerHTML = data[4]["capital"]
        document.getElementById("PortugalName").innerHTML = data[4]["name"]
        document.getElementById("PortugalPresident").innerHTML = data[4]["president"]
        document.getElementById("PortugalDay").innerHTML = data[4]["national_day"]
        document.getElementById("PortugalArea").innerHTML = data[4]["area"] + " km²"
        document.getElementById("PortugalCurrency").innerHTML = data[4]["currency"]

        document.getElementById("EtatUnisCapital").innerHTML = data[5]["capital"]
        document.getElementById("EtatUnisName").innerHTML = data[5]["name"]
        document.getElementById("EtatUnisPresident").innerHTML = data[5]["president"]
        document.getElementById("EtatUnisDay").innerHTML = data[5]["national_day"]
        document.getElementById("EtatUnisArea").innerHTML = data[5]["area"] + " km²"
        document.getElementById("EtatUnisCurrency").innerHTML = data[5]["currency"]

        document.getElementById("GroenlandCapital").innerHTML = data[6]["capital"]
        document.getElementById("GroenlandName").innerHTML = data[6]["name"]
        document.getElementById("GroenlandPresident").innerHTML = data[6]["president"]
        document.getElementById("GroenlandDay").innerHTML = data[6]["national_day"]
        document.getElementById("GroenlandArea").innerHTML = data[6]["area"] + " km²"
        document.getElementById("GroenlandCurrency").innerHTML = data[6]["currency"]

        document.getElementById("AlaskaCapital").innerHTML = data[7]["capital"]
        document.getElementById("AlaskaName").innerHTML = data[7]["name"]
        document.getElementById("AlaskaPresident").innerHTML = data[7]["president"]
        document.getElementById("AlaskaDay").innerHTML = data[7]["national_day"]
        document.getElementById("AlaskaArea").innerHTML = data[7]["area"] + " km²"
        document.getElementById("AlaskaCurrency").innerHTML = data[7]["currency"]

        document.getElementById("CanadaCapital").innerHTML = data[8]["capital"]
        document.getElementById("CanadaName").innerHTML = data[8]["name"]
        document.getElementById("CanadaPresident").innerHTML = data[8]["president"]
        document.getElementById("CanadaDay").innerHTML = data[8]["national_day"]
        document.getElementById("CanadaArea").innerHTML = data[8]["area"] + " km²"
        document.getElementById("CanadaCurrency").innerHTML = data[8]["currency"]

        document.getElementById("MexiqueCapital").innerHTML = data[9]["capital"]
        document.getElementById("MexiqueName").innerHTML = data[9]["name"]
        document.getElementById("MexiquePresident").innerHTML = data[9]["president"]
        document.getElementById("MexiqueDay").innerHTML = data[9]["national_day"]
        document.getElementById("MexiqueArea").innerHTML = data[9]["area"] + " km²"
        document.getElementById("MexiqueCurrency").innerHTML = data[9]["currency"]


        document.getElementById("RoyaumeUniCapital").innerHTML = data[10]["capital"]
        document.getElementById("RoyaumeUniName").innerHTML = data[10]["name"]
        document.getElementById("RoyaumeUniPresident").innerHTML = data[10]["president"]
        document.getElementById("RoyaumeUniDay").innerHTML = data[10]["national_day"]
        document.getElementById("RoyaumeUniArea").innerHTML = data[10]["area"] + " km²"
        document.getElementById("RoyaumeUniCurrency").innerHTML = data[10]["currency"]
    })
}
get_countrys()
