document.addEventListener('DOMContentLoaded', function () {
    const bookURL = `http://localhost:3000/books`;
    const bookContainer = document.querySelector('#main-list')
    


    fetch(`${bookURL}`)
        .then(response => response.json())
        
        .then(bookData => bookData.forEach(function (book) {
            bookContainer.innerHTML += `
            <div class="main-section">
            <div class="sub-section" id="sub-section">
              <div class="sec" id="Apple">
                <div class="books">
                  <img class="img" src="${book.coverImage}" alt="">
                </div>
                <div class="book-text" id="book-text">
                  <h1 class="main-text">${book.title}</h1>
                  <h class="sub-text">${book.id}</h>
                  <h class="sub-text">author:${book.author}</h>
                  <h class="sub-text">${book.publisher}</h>
                  <h class="sub-text">${book.description}</h>
                  <h class="sub-text">selling price:${book.sellingprice}</h>
                  <h class="sub-text">rent copies: ${book.forrent}</h>
                  <h class="sub-text">selling copies :${book.forsell}</h>
                  <span class="quantity">
                    <span class="rating">${book.quantity}</span>
    
                  </span>
                  <span class="discountprice">
                    <span class="cost">${book.price}</span>
    
                  </span>
                  <button data-id="${book.id}" id="sell-${book.id}" data-action="sell" onclick= "">sell</button>
                  <button data-id="${book.id}" id="rent-${book.id}" data-action="rent">rent</button>
                </div>
              </div>
    
            </div>
          </div>`
        }))
    })