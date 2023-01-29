document.addEventListener("DOMContentLoaded", function() {
    // Elementos del DOM que se van a actualizar con los datos de la API
    const image = document.getElementById("image");
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const address = document.getElementById("address");

    // Realizar la solicitud a la API de randomuser.me
    fetch("https://randomuser.me/api/?nat=es")
        .then(response => response.json())
        .then(data => {
            // Obtener los datos del usuario devuelto por la API
            const user = data.results[0];
            const picture = user.picture.large;
            const firstName = user.name.first;
            const lastName = user.name.last;
            const mail = user.email;
            const phoneNumber = user.phone;
            const city = user.location.city;
            const state = user.location.state;
            const postcode = user.location.postcode;

            // Actualizar los elementos del DOM con los datos del usuario
            image.src = picture;
            name.textContent = `${firstName} ${lastName}`;
            email.textContent = mail;
            phone.textContent = phoneNumber;
            address.textContent = `${city} ${state} ${postcode}`;
        });
});


document.getElementById("experience-button").addEventListener("click", function() {
    document.querySelector(".experience-section").classList.toggle("hidden");
  });
  
  document.getElementById("about").addEventListener("click", function() {
    document.querySelector(".about-section").classList.toggle("hidden");
  });
  
  document.getElementById("skill-list").addEventListener("click", function() {
    document.querySelector(".skill-section").classList.toggle("hidden");
  });
  