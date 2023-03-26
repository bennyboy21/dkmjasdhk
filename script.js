const url = "https://www.instagram.com/prayertimeverses/?__a=1&__d=dis"

fetch(url)
.then((response) => response.json())
.then((data) => console.log(data));