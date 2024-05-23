function toggleContent(requestId) {
  var content = document.getElementById("content" + requestId);
  var request = document.getElementById("request" + requestId);

  if (content.style.display === "block") {
    content.style.maxHeight = "1"; // Set max-height to 0 for closing animation
    setTimeout(function () {
      content.style.display = "none"; // Hide content after animation
    }, 0.3); // Wait for the animation duration (300ms)
    request.style.maxHeight = "60px";
  } else {
    content.style.display = "block";
    var contentHeight = content.scrollHeight;
    request.style.maxHeight = 60 + contentHeight + "px";
  }
}
