window.addEventListener("DOMContentLoaded", function() {
  document.querySelector("#fetchQuotesBtn").addEventListener("click", function() {

    // Get values from drop-downs
    const topicDropdown = document.querySelector("#topicSelection");
    const selectedTopic = topicDropdown.options[topicDropdown.selectedIndex].value;
    const countDropdown = document.querySelector("#countSelection");
    const selectedCount = countDropdown.options[countDropdown.selectedIndex].value;

    // Get and display quotes
    fetchQuotes(selectedTopic, selectedCount);
  });
});

// TODO: Modify to use Fetch API
async function fetchQuotes(topic, count) {
  let url = "https://wp.zybooks.com/quotes.php?topic=" + topic + "&count=" + count;
  let response = await fetch(url);
  
  if (response.ok) {
    let quotes = await response.json();

    let html = "";
    html = "<ol>";
    for (let c of quotes) {
      html += `<li>${c.quote} - ${c.source}</li>`;
    } // for (number requested)
    html += "</ol>";
  
    document.querySelector("#quotes").innerHTML = html;
  } // if (fetch successful)
}
