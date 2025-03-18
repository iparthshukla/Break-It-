// Light/Dark Mode Toggle
const toggleMode = document.getElementById("toggle-mode");
toggleMode.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Post Comment Functionality
function postComment(postId) {
    const commentInput = document.getElementById(`comment-input-${postId}`);
    const commentText = commentInput.value.trim();

    if (commentText !== "") {
        const commentList = document.getElementById(`comment-list-${postId}`);
        const newComment = document.createElement("li");
        newComment.textContent = commentText;
        commentList.appendChild(newComment);
        commentInput.value = "";
    }
}

// Poll Vote Functionality
function votePoll(pollId, option) {
    const result = document.getElementById(`poll-result-${pollId}`);
    result.innerHTML = `✅ You voted for <strong>${option}</strong>`;
}
