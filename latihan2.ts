let pesan: string = 'Hello, World!';
// create a new heading 1 element
let heading = document.createElement('h1');
heading.textContent = pesan;
// add the heading the document
document.body.appendChild(heading);