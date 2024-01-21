document.addEventListener('DOMContentLoaded', function () {
    loadItems();
  });
  
  function loadItems() {
    const itemList = document.getElementById('itemList');
    itemList.innerHTML = localStorage.getItem('items') || '';
  }
  
  function saveItems() {
    const itemList = document.getElementById('itemList');
    localStorage.setItem('items', itemList.innerHTML);
  }
  
  function addItem() {
    const newItemText = document.getElementById('newItem').value.trim();
    if (newItemText !== '') {
      const itemList = document.getElementById('itemList');
      const newItem = document.createElement('li');
      newItem.innerHTML = `<span>${newItemText}</span> <button onclick="deleteItem(this)">Delete</button>`;
      itemList.appendChild(newItem);
      saveItems();
      document.getElementById('newItem').value = '';
    }
  }
  function deleteItem(button) {
    const itemList = document.getElementById('itemList');
    const listItem = button.parentNode;
    itemList.removeChild(listItem);
    saveItems();
  }
  
  function deleteAll() {
    const itemList = document.getElementById('itemList');
    itemList.innerHTML = '';
    saveItems();
  }
    