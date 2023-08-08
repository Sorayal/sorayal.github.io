// Function to toggle the collapsible content
function toggleCollapsible() {
  this.classList.toggle("collapsed");

  const contentRow = this.nextElementSibling;
  if (contentRow.maxHeight) {
    contentRow.maxHeight = 0;
  } else {
    contentRow.maxHeight = contentRow.scrollHeight + "px";
  }
}

// Add event listeners to the collapsible headers
document.addEventListener("DOMContentLoaded", function () {
  const collapsibleHeaders = document.querySelectorAll(".collapsible-header");
  collapsibleHeaders.forEach((header) => {
    header.addEventListener("click", toggleCollapsible);
  });
});
