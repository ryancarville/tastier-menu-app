'use-strict';
import menuInfo from './components/molecules/menuInfo';
import { menuData, mockMenu } from './data/mockData';
import getMenu from './components/organisms/menu'
import { IMenu } from './types/menu'
import searchMenu from './utilities/searchMenu';
import { EFoodCategory } from './enums'
import filterMenu from './utilities/filterMenu'
import footer from './components/organisms/footer'

const App = function _App(): string {
  return `
    <header>
      <nav>
        <span id="logo-wrapper">
          <img id="logo" src="/logo.png" />
          <p>tastier</p>
        </span>
        <div id="search-tools">
          <input
            id="search-input"
            placeholder="Find your favorites..."
            value=""
          />
          <select id="category-select" name="category-filter" value="">
          </select>
        </div>
      </nav>
    </header>
    <section id="menu-info"></section>
    <section id="menu"></section>
    <footer id="footer"></footer>
  `;
}

// render the HTML
const doc: HTMLElement | null = document.getElementById('app');
if (!!doc) doc.innerHTML = App();

// get the HTML elements
const menuInfoEl = document.querySelector<HTMLElement>('#menu-info');
const menuEl = document.querySelector<HTMLElement>('#menu');
const searchInputEl = document.querySelector<HTMLInputElement>('#search-input');
const filterInputEl = document.querySelector<HTMLSelectElement>('#category-select');
const footerEl = document.querySelector<HTMLElement>('#footer');

// set the app internal state
App.state = {
  menuData,
  menu: mockMenu,
  currMenu: mockMenu,
  currFilteredMenu: mockMenu,
  error: {
    message: ''
  },
  filterMenu: function(value: EFoodCategory) {
    const res: IMenu | string = filterMenu(value, this.menu);
    if (typeof(res) === 'object') this.currFilteredMenu = res;
    this.checkResponse(res);
  },
  searchMenu: function(value: string) {
    const res = searchMenu(value, this.currFilteredMenu);
    this.checkResponse(res);
  },
  updateMenu: function() {
    if (!!menuEl) menuEl.innerHTML = getMenu(this.currMenu);
    window.scrollTo(0,0);
  },
  checkResponse: function(res: IMenu | string) {
    if (this.error.message) this.clearError();
    if (!!menuEl) menuEl.innerHTML = '';
    if (typeof(res) === 'string') {
      this.error.message = res;
      const errMsgWrapper = `
        <div class='search-results-error'>
          <img src='./assets/not-found.png' alt='Food Not Found'/>
          <h2>${res}</h2>
        </div>`;
      if (!!menuEl) menuEl.innerHTML = errMsgWrapper;
    } else {
      this.currMenu = res;
      this.updateMenu();
    }
  },
  clearError: function() {
    this.error = {message: ''};
  }
}

// event listener for filter menu
if (!!filterInputEl && !!searchInputEl) {
  filterInputEl.addEventListener('change', (e) => {
    e.preventDefault();
    const { value } = e.target as HTMLSelectElement;
    App.state.filterMenu(value as EFoodCategory);
    const searchValue  = searchInputEl.value ;
    if (!!searchValue) App.state.searchMenu(searchValue);
  });
  /*
  event listener for search
  the timeout is to create a debounce effect for when the user types
  this allows for a smoother search result return
  */
  searchInputEl.addEventListener('keyup', (e) => {
    e.preventDefault();
    setTimeout(() => {
        const { value } = searchInputEl;
        App.state.searchMenu(value);
    }, 500);
  });
}

// render the category select element dynamically
const options = Object.keys(EFoodCategory);
options.forEach((cat) => {
  const option = document.createElement('option');
  // @ts-ignore
  option.value = EFoodCategory[cat];
  // @ts-ignore
  option.text = EFoodCategory[cat];
  if (!!filterInputEl) filterInputEl.add(option);
});

// render menu information
if (!!menuInfoEl) menuInfoEl.innerHTML = menuInfo(App.state.menuData);

// render the initial menu
if (!!menuEl) menuEl.innerHTML = getMenu(App.state.menu);

// render the footer
if (!!footerEl) footerEl.innerHTML = footer();
