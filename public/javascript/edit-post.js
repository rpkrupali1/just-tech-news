async function editFormHandler(event) {
  event.preventDefault();
  const id = document.location.toString().split("/")[
    document.location.toString().split("/").length - 1
  ];

  const title = document.querySelector("input[name='post-title']").value.trim();

  const response = await fetch(`/api/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      title,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) document.location.replace("/dashboard/");
  else alert(response.status);
}

document
  .querySelector(".edit-post-form")
  .addEventListener("submit", editFormHandler);
