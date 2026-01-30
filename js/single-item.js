
// Create SingleItem Element
export function createSingleItem(item) {
  const div = document.createElement("div");
  div.className = "single-item";
  div.innerHTML = `
  <input type="checkbox" ${item.completed ? "checked" : ""} />
  <p style="text-decoration: ${item.completed ? "line-through" : "none"}">
    ${item.name}
  </p>
  <button class="btn edit-btn" type="button">
    <i class="fa-solid fa-pencil"></i>
  </button>
  <button class="btn remove-btn" type="button">
    <i class="fa-solid fa-xmark"></i>
  </button>
`;

  // Toggle completed
  const checkbox = div.querySelector('input[type="checkbox"]');
  checkbox.addEventListener("change", () => editCompleted(item.id));

  // Delete item
  const removeBtn = div.querySelector(".remove-btn");
  removeBtn.addEventListener("click", () => removeItem(item.id));

  // Edit item
  const editBtn = div.querySelector(".edit-btn");
  editBtn.addEventListener("click", () => setEditId(item.id));

  return div;
}