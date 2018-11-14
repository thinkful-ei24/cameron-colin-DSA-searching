///////////// LINEAR SEARCH ///////////////////////
function bookSearchLinear(library, dewey, title, author) {
  for (let index in library) {
    if(library[index].dewey === dewey && library[index].title) {
      return library[index];
    }
  }
  return 'Book not found';
}

//input 005.133, 'The REXX Language'
//
//output { author: 'Cowlishaw, Mike', dewey: '005.133', title: 'The REXX Language'  }
//
//


function bookSearchBinary(library, book, start, end, counter) {
  start = start === undefined ? 0 : start;
  end = end === undefined ? library.length -1 : end;
  counter = counter === undefined ? 0 : counter;
  let index = Math.floor((start + end)/2);
  let item = library[index];

  if(item == book) {
    return item;
  }

  if(book.dewey < item.dewey) {
    counter++;
    return bookSearchBinary(library, book, start, index-1, counter)
  }
  else if (book.dewey > item.dewey){
    counter++;
    return bookSearchBinary(library, book, start, index-1, counter)
  }
  else /* dewey numbers are equal*/ {
    if(book.author === item.author){
      counter++;
      return [item, counter];
    }
    if(book.author < item.author) {

      while (index >= 0 && book.dewey === item.dewey){
        if(item.author === book.author) {
          counter++;
          return [item, counter];
        }
        counter++;
        index--;
        item = library[index]
      }
      return 'Book not found';
    }
    else {
      while (index<library.length && book.dewey === item.dewey){
        if(item.author === book.author) {
          counter++;
          return [item, counter];
        }
        counter++;
        index++;
        item = library[index]
      }
      return 'book not found';
    }
  }
}

const libraryOne = [
    { author: 'Cowlishaw, Mike', dewey: '005.133', title: 'The REXX Language'  },
    { author: 'Sams', dewey: '005.133', title: 'Teach Yourself C++ In 21 Days'  },
    { author: 'Stroustrup., Bjarne', dewey: '005.133', title: 'The C++ Programming Language'  },
    { author: 'Crockford, Douglas', dewey: '005.2762', title: 'JavaScript: The Good Parts'  },
    { author: 'Flanagan, David', dewey: '005.2762', title: 'JavaScript: The Definitive Guide'  },
    { author: 'Schmidt, Meinhard', dewey: '005.44684', title: 'Windows Vista for Dummies'  },
    { author: 'Zondervan', dewey: '220.52081', title: 'NIV Study Bible'  },
    { author:'Humphries, Russell, Dr.', dewey: '231.7652', title: 'Starlight and Time'  },
    { author: 'Jane, Frederick Thomas', dewey: '623.82509051', title: 'Jane\'s Fighting Ships'  },
    { author: 'Norris, Chuck', dewey: '796.8092', title: 'The Official Chuck Norris Fact Book'  }
];

const bookOne = { author: 'Sams', dewey: '005.133', title: 'Teach Yourself C++ In 21 Days'  };
const bookTwo = { author: 'Cowlishaw, Mike', dewey: '005.133', title: 'The REXX Language'  };

console.log(bookSearchBinary(libraryOne, bookTwo));

//sorting to find one book dewey
//look at the author
//move to left or right depending on alphabetical order of our book vs found book

