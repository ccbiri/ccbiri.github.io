const searchBox = document.getElementById('searchBox');
const resultElement = document.getElementById('result');


searchBox.addEventListener('input', function() {

    const searchText = searchBox.value;

    if (searchText != "") {
        resultElement.textContent = "You typed: " + searchText;
    } else {
        resultElement.textContent = "";
    }
  });

  const listings = document.getElementsByClassName('listings');

  function openEmailClient() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const subject = "Contact from your website";
    const mailtoLink = `mailto:your-email@example.com?subject=${subject}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;

    window.location.href = mailtoLink;
}
