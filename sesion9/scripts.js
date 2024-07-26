function loadPage(page) {
  //Permite manipular peticiones y respuestas
  fetch(page)
    .then((Response) => Response.text())
    .then((data) => {
      document.getElementById("content").innerHTML = data;
    })
    .catch((error) => console.error("error al cargar la pagina:", error));
}

window.onload = () => loadPage('home.html');