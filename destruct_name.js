let book = {
  isbn : 'aaaaa',
  title: 'title'
};

function getInfo({ isbn }) {
  console.log(isbn);
}

getInfo(book);
