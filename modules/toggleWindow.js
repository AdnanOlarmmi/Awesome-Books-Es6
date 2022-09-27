const listEl = document.querySelector('.header-list');
const addnewEl = document.querySelector('.header-addnew');
const contactEl = document.querySelector('.header-contact');
const libraryBooksListEl = document.querySelector('.library-booklist');
const contactInformationEl = document.querySelector('.contact-information');
const form = document.querySelector('form');

const toggleWindow = () => {
  listEl.addEventListener('click', () => {
    form.classList.remove('show');
    contactInformationEl.classList.remove('show');
    libraryBooksListEl.classList.remove('hide');
    listEl.style.color = 'blue';
    addnewEl.style.color = 'black';
    contactEl.style.color = 'black';
  });

  addnewEl.addEventListener('click', () => {
    form.classList.add('show');
    contactInformationEl.classList.remove('show');
    libraryBooksListEl.classList.add('hide');
    listEl.style.color = 'black';
    addnewEl.style.color = 'blue';
    contactEl.style.color = 'black';
  });

  contactEl.addEventListener('click', () => {
    form.classList.remove('show');
    contactInformationEl.classList.add('show');
    libraryBooksListEl.classList.add('hide');
    listEl.style.color = 'black';
    addnewEl.style.color = 'black';
    contactEl.style.color = 'blue';
  });
};

export default toggleWindow;
