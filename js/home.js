const form = document.querySelector(".form")
const btnForm = document.querySelector('#btnForm')
const close = document.querySelector("#close")
const country_name = document.getElementById("Nom-du-Pays")
const capital = document.getElementById("Capital")
const paths = document.querySelectorAll(".map > svg > path")
var current_country = ''
var current_id = -4


paths.forEach(function (path, index) {
    path.addEventListener("click", async function () {
        current_country = path.parentNode.id
        let country = await (await fetch(`http://127.0.0.1:8000/countrys/${current_country}`)).json()

        if (Object.keys(country).length === 0) {
            current_id = -1
        }

        if (current_id != -1) {
            current_id = country['id']
            const inputs = document.querySelectorAll(".forms > .form-group > input")

            inputs[1].value = country["capital"]
            inputs[2].value = country["president"]
            inputs[3].value = country["national_day"]
            inputs[4].value = country["currency"]
            inputs[5].value = country["area"]
        }

        form.style.opacity = "1"
        form.style.zIndex = "10"
        form.style.userSelect = "all"
        close.style.opacity = "1"
        close.style.zIndex = "10"
        close.style.userSelect = "contain"
        country_name.value = path.parentNode.id
        capital.focus()
    })

    path.addEventListener("mouseover", function () {
        path.parentNode.style.zIndex = 1
    })

    path.addEventListener("mouseleave", function () {
        path.parentNode.style.zIndex = 0
    })
})

close.addEventListener("click", function () {
    close_form()
})

async function edit() {
    console.log("test")
}

async function remove() {
    console.log("test")
}

document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        close_form()
    }
})

btnForm.addEventListener("click", async function () {
    const inputs = document.querySelectorAll(".forms > .form-group > input")
    let method_type = (current_id === -1) ? 'POST' : 'PUT'
    let url = 'http://127.0.0.1:8000/countrys/'

    if (current_id != -1) {
        url += current_country
    }

    await fetch(url, {
        method: method_type,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "id": 0,
            "name": inputs[0].value,
            "capital": inputs[1].value,
            "president": inputs[2].value,
            "national_day": inputs[3].value,
            "currency": inputs[4].value,
            "area": inputs[5].value
        })
    })

    close_form()
    get_countrys()
})

function close_form() {
    form.style.opacity = "0"
    form.style.zIndex = "-1"
    form.style.userSelect = "none"
}

async function get_countrys() {
    data = await (await fetch("http://127.0.0.1:8000/countrys")).json()
    const tbody = document.querySelector("#tableau > table > tbody")
    tbody.innerHTML = ''

    data.forEach(function (country, index) {

        const tr = document.createElement("tr")
        tr.id = country["name"]

        for (const [key, value] of Object.entries(country)) {
            if (key == "id") {
                continue
            }

            const td = document.createElement("td")
            td.textContent = value

            if (key == "area") {
                td.textContent += " km²"
            }

            tr.appendChild(td)
        }

        const td = document.createElement("td")
        td.id = 'edit-remove'

        const edit = document.createElement("i")
        edit.id = 'btn-edit'
        edit.className = "fi fi-rr-edit"
        edit.setAttribute("onclick","edit()");

        const remove = document.createElement("i")
        remove.id = 'btn-remove'
        remove.className = "fi fi-rr-trash"
        remove.setAttribute("onclick", "remove()");

        td.appendChild(edit)
        td.appendChild(remove)
        tr.appendChild(td)
        tbody.appendChild(tr)
    })
}

get_countrys()
