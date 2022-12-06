const newFormHandler = async (e) => {
    e.preventDefault();
  
    const title = document.querySelector("#post_title").value.trim();
    const content = document.querySelector("#post-content").value.trim();
  
    if (title && content) {
      const response = await fetch(`/api/posts`, {
        method: "POST",
        body: JSON.stringify({ title, content }),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.ok) {
        document.location.replace("/dashboard");
      } else {
        alert("Fields cannot be empty");
      }
    }
  };
  
  const delButtonHandler = async (e) => {
    if (e.target.hasAttribute("data-id")) {
      const id = e.target.getAttribute("data-id");
  
      const response = await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
  
      if (response.ok) {
        document.location.replace("/dashboard");
      } else {
        alert("Failed to delete post");
      }
    }
  };
  
  document
    .querySelector(".new-post-form")
    .addEventListener("submit", newFormHandler);
  
  if (document.querySelector(".post-list")) {
    let deleteButton = document.querySelectorAll(".deleteButton");
    for (let i = 0; i < deleteButton.length; i++) {
      deleteButton[i].addEventListener("click", delButtonHandler);
    }
  }