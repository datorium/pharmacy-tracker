const itemForm = document.getElementById('itemForm');
const itemList = document.getElementById('itemList');

itemForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const itemName = document.getElementById('itemName').value.trim();
  const expiryDate = document.getElementById('expiryDate').value;
  const quantity = document.getElementById('quantity').value;

  if (itemName && expiryDate && quantity) {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${itemName} (Expires: ${expiryDate}, Quantity: ${quantity})</span>
      <button onclick="removeItem(this)">Remove</button>
    `;
    itemList.appendChild(li);

    itemForm.reset();
  }
});

function removeItem(button) {
  button.parentElement.remove();
}
