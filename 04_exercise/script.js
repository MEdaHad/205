let books = [
  {
    title: "You Can't See me",
    author: 'John Cena',
    status: 'In Stock',
    price: 9.99,
  },
  { title: 'MockingBird', author: 'Eminem', status: 'Sold Out', price: 22.99 },
  {
    title: 'The Pursuit of Happyness',
    author: 'Will Smith',
    status: 'In Stock',
    price: 17,
  },
];

books.sort((a, b) => a.title.localeCompare(b.title));

const bookList = document.getElementById('book-list');
books.forEach((book) => {
  const row = document.createElement('tr');
  row.innerHTML = `<td>${book.title}</td><td>${book.author}</td><td>${
    book.status
  }</td><td>CHF${book.price.toFixed(2)}</td>`;
  bookList.appendChild(row);
});

const addBtn = document.getElementById('add-btn');
addBtn.addEventListener('click', () => {
  const addForm = document.getElementById('add-form');
  if (addForm.style.display === 'none') {
    addForm.style.display = 'block';
  } else {
    addForm.style.display = 'none';
  }
});

const addForm = document.getElementById('add-form');
addForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const title = document.getElementById('title-input').value;
  const author = document.getElementById('author-input').value;
  const status = document.getElementById('status-select').value;
  const price = parseFloat(document.getElementById('price-input').value);
  const newBook = { title, author, status, price };
  books.push(newBook);

  books.sort((a, b) => a.title.localeCompare(b.title));

  bookList.innerHTML = '';

  books.forEach((book) => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${book.title}</td><td>${book.author}</td><td>${
      book.status
    }</td><td>CHF${book.price.toFixed(2)}</td>`;
    bookList.appendChild(row);
  });

  addForm.reset();
  addForm.style.display = 'none';
});
