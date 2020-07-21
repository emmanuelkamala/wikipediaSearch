//select elements
const loading = document.querySelector(".loading");
const searchForm = document.getElementById("searchForm");
const output = document.querySelector(".output");
const search = document.getElementById("search");
const feedback = document.querySelector(".feedback");

const base = "https://en.wikipedia.org/w/api.php";
const url = "?action=query&format=json&origin=*&list=search&srsearch=";

searchForm.addEventListener("submit", function(event) {
    event.preventDefault();
  
    const value = search.value;
  
    if (value === "") {
      showFeedback("please enter a valid search value");
    } else {
      search.value = "";
      // ajax
      ajaxWiki(value);
    }
  });


//show feedback
