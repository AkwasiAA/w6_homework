document.addEventListener('DOMContentLoaded', () => {
  const newItemForm = document.querySelector('#new-item-form');
  newItemForm.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
});

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const newProductEntryItem = createNewProductEntryItem(event.target);
  const newProductEntry = document.querySelector('#new-product-entry');
  newProductEntry.appendChild(newProductEntryItem);

  event.target.reset();
};

const createNewProductEntryItem = function (form) {
  const newProductEntryItem = document.createElement('li');
  newProductEntryItem.classList.add('new-product-entry-item');

  const productName = document.createElement('h2');
  productName.textContent = form.product_name.value;
  newProductEntryItem.appendChild(productName);

  const prodDescription = document.createElement('h3');
  prodDescription.textContent = form.prod_description.value;
  newProductEntryItem.appendChild(prodDescription);

  const quantity = document.createElement('h4');
  quantity.textContent = form.quantity.value;
  newProductEntryItem.appendChild(quantity);

  const purchasePrice = document.createElement('h4');
  purchasePrice.textContent = form.purchase_price.value;
  newProductEntryItem.appendChild(purchasePrice);

  const sellingPrice = document.createElement('h4');
  sellingPrice.textContent = form.selling_price.value;
  newProductEntryItem.appendChild(sellingPrice);

  const supplier = document.createElement('p');
  supplier.textContent = form.supplier.value;
  newProductEntryItem.appendChild(supplier);

  return newProductEntryItem;
};

const handleDeleteAllClick = function (event) {
  const newProductEntry = document.querySelector('#new-product-entry');
  newProductEntry.innerHTML = '';
};