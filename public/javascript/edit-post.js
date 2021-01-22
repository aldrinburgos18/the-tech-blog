async function editFormHandler(event) {
  event.preventDefault();

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const title = document.querySelector("#postTitle").value;
  const post_message = document
    .querySelector('textarea[name="post-content"]')
    .value.trim();

  const response = await fetch(`/api/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      title,
      post_message,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".edit-post-form")
  .addEventListener("submit", editFormHandler);
