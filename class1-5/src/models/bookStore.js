
class BookStore {

  constructor() {
    this._books = []
    this.fetchBooks();
    this._observer;
  }

  get books(){
    return this._books;
  }

  subscribe(observer){
    this._observer = observer;
  }

fetchBooks(){
  fetch("http://localhost:7777/books")
  .then((response) => {
    return response.json()
    })
    .then((response) => {
      this._books = response;
      if(this._observer){
        this._observer.dataReady();
      }
      console.log("XXX: " + JSON.stringify(this._books));
    })
}

  /*
  function individualBook (id) {
    return this._books[id];
  }

  set addBook(String title, int id){
    _books.push({id: id, title: title});
  }

  set editBook(String title, int id){
    _books[id] = {id: id, title: title};
  }

  set deleteBook(int id){
    delete _books[id];
  }
*/
}

export default new BookStore();