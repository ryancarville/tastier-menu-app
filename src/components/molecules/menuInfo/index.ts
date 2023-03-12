'use-strict';
import type { IMenuInfo } from '../../../types/menu';

/**
 * @description creates a template string for the menus information
 * @param data IMenuInfo
 * @returns string
 */
const getMenuInfo = (data: IMenuInfo): string => {
  const { title, rating, address, image } = data;

  // if there is a rating render it
  const getRating = () => {
    if (!!rating) {
      let count: number = 0;
      let stars: string = '';
      while (count < rating) {
        stars += '&#11088 ';

        count++;
      }
      const starSpan: string = `<span>${stars}</span>`;
      return starSpan;
    }
  };

  // if there is a address render it
  const getAddress = () => {
    if (!!address) {
      const addressDiv = `<div class='menu-info-details'>
        <span>${address.street} ${address.houseNumber} <br/> ${address.postCode} ${address.city} <br/> ${address.county}, ${address.country}</span>
      </div>`;
      return addressDiv;
    }
  };

  const menuInfoEl = `
    <div>
      <img src=${image.path} alt=${image.alt}/>
      <div id='menu-info-details'>
        <h1>${title}</h1>
        ${getRating()}
        <span id='menu-info-details'>${getAddress()}</span>
      </div>
    </div>`;

  return menuInfoEl;
};

export default getMenuInfo;
