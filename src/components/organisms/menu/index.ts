'use-strict';
import { IMenu, IMenuItem } from '../../../types/menu';
import menuCard from '../../molecules/menuCard';

/**
 * @description creates the menu grid as a template string
 * @param menuObj
 * @returns string
 */

const createMenu = (menuObj: IMenu): void => {
  const menuEl = document.querySelector('#menu');
  let menu: string = '';

  // get all the key values for the menu
  const menuKeys: string[] = Object.keys(menuObj);

  /*loop thru each key to access its properties*/
  menuKeys.forEach((key: string) => {
    // title text for the section
    const title: string = `<h2 class='menu-section-title'>${menuObj[key].title}</h2>`;
    // create each menu item for the section
    let cards: string = '';
    menuObj[key].items.forEach((item: IMenuItem) => (cards += menuCard(item)));
    menu += `
      ${title}
      <div class='menu-grid-container'>
        ${cards}
      </div>`;
  });

  if (!!menuEl) menuEl.innerHTML = menu;

  return;
};

export default createMenu;
