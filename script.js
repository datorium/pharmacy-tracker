const itemForm = document.getElementById('itemForm');
const itemNameInput = document.getElementById('itemName');
const expiryDateInput = document.getElementById('expiryDate');
const quantityInput = document.getElementById('quantity');
const itemList = document.getElementById('itemList');
const emptyMessage = document.getElementById('emptyMessage');

itemForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const itemName = itemNameInput.value.trim();
  const expiryDate = expiryDateInput.value; 
  const quantity = quantityInput.value;
  
  if (!itemName || !expiryDate || !quantity) {
    return; // Basic HTML 'required' handles messaging
  }

  // Check if expiry date is in the past
  const today = new Date().setHours(0,0,0,0);
  const chosenDate = new Date(expiryDate).setHours(0,0,0,0);
  if (chosenDate < today) {
    alert("This expiry date is in the past. Please choose a future date.");
    return;
  }

  // Create list item
  const li = document.createElement('li');
  li.innerHTML = `
    <span>
      <strong>${itemName}</strong><br/>
      Expires: ${expiryDate}, Qty: ${quantity}
    </span>
    <button onclick="removeItem(this)">Remove</button>
  `;
  
  // Add to the item list
  itemList.appendChild(li);

  // Clear empty message
  updateEmptyMessage();

  // Reset form
  itemForm.reset();
});

// Remove item function
function removeItem(button) {
  button.parentElement.remove();
  updateEmptyMessage();
}

// Show/hide empty message
function updateEmptyMessage() {
  if (itemList.children.length === 0) {
    emptyMessage.style.display = 'block';
  } else {
    emptyMessage.style.display = 'none';
  }
}

// On page load, check if list has items
updateEmptyMessage();
