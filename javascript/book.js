document.addEventListener('DOMContentLoaded', function () {
    const bookURL = `http://localhost:3000/books`;
    const bookContainer = document.querySelector('#book-container')
    const bookForm = document.querySelector('#book-form')


    fetch(`${bookURL}`)
        .then(response => response.json())
        
        .then(bookData => bookData.forEach(function (book) {
            bookContainer.innerHTML += `
      <div id=${book.id}>
      <h1>${book.price}</h1>
        <h2>${book.title}</h2>
        <h3>Author: ${book.author}</h3>
        <h4>${book.quantity}</h4>
        <h5>${book.publisher}</h5>
        <img src="${book.coverImage}" width="333" height="500">
        <p>${book.description}</p>
        <button data-id="${book.id}" id="edit-${book.id}" data-action="edit">Edit</button>
        <button data-id="${book.id}" id="delete-${book.id}" data-action="delete">Delete</button>
      </div>`
        }))


    //create
    document.getElementById('adddata').addEventListener('click', (e) => {
      console.log("add")
        const idInput = bookForm.querySelector('#id').value
        const priceInput = bookForm.querySelector('#price').value
        const quantityInput = bookForm.querySelector('#quantity').value
        const publisherInput = bookForm.querySelector('#publisher').value
        const titleInput = bookForm.querySelector('#title').value
        const authorInput = bookForm.querySelector('#author').value
        const coverImageInput = bookForm.querySelector('#coverImage').value
        const descInput = bookForm.querySelector('#description').value
        const forrent = bookForm.querySelector('#bookforrent').value
        const forsell = bookForm.querySelector('#bookforsell').value
        const sellingprice = bookForm.querySelector('#sellingprice').value

  
        fetch(`${bookURL}`, {
            method: 'POST',
            body: JSON.stringify({
                id: idInput,
                title: titleInput,
                author: authorInput,
                coverImage: coverImageInput,
                description: descInput,
                publisher : publisherInput,
                quantity : quantityInput,
                price : priceInput,
                sellingprice: sellingprice,
                forrent:forrent,
                forsell:forsell

            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
            .then(book => {
              console.log(book,"value get")
              
                bookContainer.innerHTML += `
              <div ${book.id}>
              <h1>${book.price}</h1>
              <h1>${book.forrent}</h1>
              <h1>${book.sellingprice}</h1>
              <h1>${book.forsell}</h1>
              <h1>${book.price}</h1>
              <h2>${book.title}</h2>
              <h3>Author: ${book.author}</h3>
              <h4>${book.quantity}</h4>
              <h5>${book.publisher}</h5>
              <img src="${book.coverImage}" width="333" height="500">
              <p>${book.description}</p>
                <button data-id="${book.id}" id="edit-${book.id}" data-action="edit">Edit</button>
                <button data-id="${book.id}" id="delete-${book.id}" data-action="delete">Delete</button>
              </div>`
            })





    })




})