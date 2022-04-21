const $form = document.querySelector("form")

function logValues() {
    $form.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const firstName = formData.get("first-name");
        const lastName = formData.get("last-name");
        const email = formData.get("email");
        console.log(firstName, lastName, email);
    });
}