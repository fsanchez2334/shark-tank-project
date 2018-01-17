// Add comment section variables
const comment = document.getElementById("comment");
const submitComment = document.getElementById("submit");
const makeComment = document.getElementById("make-comment");
const commentSection = document.getElementById("comment-section");



comment.addEventListener("submit", (event) => {
    event.preventDefault();
    let span = document.createElement("span");
    
    commentSection.appendChild(span.value);
});
