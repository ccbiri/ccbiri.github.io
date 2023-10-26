const searchBox = document.getElementById('searchBox');
const resultElement = document.getElementById('result');


searchBox.addEventListener('input', function() {

    const searchText = searchBox.value;

    if (searchText != "") {
        resultElement.innerHTML = "You typed: " + searchText;
    } else {
        searchBox.style.display('none');
    }
  });