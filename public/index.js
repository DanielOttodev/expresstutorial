const ourBtn = document.getElementById("ourFetched");
const fetchResponse = document.getElementById("fetchedResponse");
const selectIcon = document.querySelectorAll(".material-icons");

function youClicked() {
  fetch("http://localhost:3000/api/something")
    .then((response) => response.text())
    .then((info) => (fetchResponse.textContent = info))
    .catch((err) => alert(err));
}

ourBtn.addEventListener("click", console.log(selectIcon));

// Add event listener to all select icons
for (x = 0; x < selectIcon.length; x++) {
  selectIcon[x].addEventListener("click", (e) => {
    let user =
      e.target.parentElement.parentElement.textContent.split("send")[0];
    console.log(user);
  });
}
