const itemInput = document.getElementById('itemInput');
const addBtn = document.getElementById('addBtn');
const removeBtn = document.getElementById('removeBtn');
const myList = document.getElementById('myList');

addBtn.addEventListener('click', function() {
    const textValue = itemInput.value.trim();

    if (textValue !== "") {
        const newListItem = document.createElement('li');
        newListItem.textContent = textValue;
        myList.appendChild(newListItem);
                
        itemInput.value = '';
    }
});

removeBtn.addEventListener('click', function() {
    const lastItem = myList.lastElementChild;

    if (lastItem) {
        myList.removeChild(lastItem);
    }
});