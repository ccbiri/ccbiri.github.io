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
    const message = document.getElementById("message").value;
    const subject = "Customer Remarks";
    const mailtoLink = `mailto:cigerettecorner@gmail.com?subject=${subject}`;

    window.location.href = mailtoLink;
}
