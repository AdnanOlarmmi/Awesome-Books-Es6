import toggleWindow from './modules/toggleWindow.js';
import Library from './modules/library.js';
import renderDate from './modules/date.js';

toggleWindow();
const awesomeBooks = new Library();
awesomeBooks.addBook();
awesomeBooks.renderBooks();
renderDate();
