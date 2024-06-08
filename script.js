function copy() {
    let el = document.getElementById("access-token")
    navigator.clipboard.writeText(el.value)
    el.innerText = "Скопировано"
    setTimeout(() => el.innerText = "Скопировать", 3000)
}


function auth() {
    let scopesElements = document.getElementsByClassName("scope")
    let scopes = []
    for (let el of scopesElements) {
        if (el.checked) {
            scopes.push(el.id)
        }
    }
    scopes = scopes.join("%20")

    let redirect_uri = "https://declider.github.io/twitch-auth/"
    let client_id = "aiyysqyzzy8is6gwt4125y1603uwi8"
    let state = Array.from(Array(30), () => Math.floor(Math.random() * 36).toString(36)).join('');
    let url = `https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scopes}&state=${state}&force_verify=true`

    window.open(url,"_self")
}


window.onload = () => {
    let hash = window.location.hash
    if (!hash) { return }
    if (hash.includes("access_token=")) {
        let token = hash.split("access_token=")[1].split("&",1)[0]
        document.getElementById("access-token").value = token
        document.getElementById("copy").disabled = false
    } // else if template
}