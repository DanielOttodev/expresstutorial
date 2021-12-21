const ourBtn = document.getElementById("ourFetched");
const fetchResponse = document.getElementById("fetchedResponse");

function youClicked() {
  fetch("http://localhost:3000/api/something")
    .then((response) => response.text())
    .then((info) => (fetchResponse.textContent = info));
}

ourBtn.addEventListener("click", youClicked);
