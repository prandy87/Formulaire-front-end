//Le DOM ou Document Objet Model est une interface de programmation
//représentant une page web de manière structurée,
//sous une forme qui permet à un langage comme JavaScript d’y accéder
//et de le manipuler.

document.addEventListener("DOMContentLoaded", () => {
  console.log("Loaded page");
  document.getElementById("submit-btn").addEventListener("click", async () => {
    console.log("I hear you");
    const data = {
      firstname: document.getElementById("firstname").value,
      lastname: document.getElementById("lastname").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };

    const response = await axios.post("http://localhost:3000/form", data);
    console.log(response.data);
  });
});
