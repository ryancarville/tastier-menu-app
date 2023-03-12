'use-strict';
import type { IMenuInfo } from '../../../types/menu';

/**
 * @description creates a menus detail information
 * @param data IMenuInfo
 * @returns void
 */
const menuInfo = (data: IMenuInfo): void => {
  const { title, rating, address, image } = data;
  const menuInfoEl = document.querySelector<HTMLElement>('#menu-info');

  // if there is a rating render it
  const getRating = () => {
    if (!!rating) {
      let count: number = 0;
      let stars: string = '';
      while (count < rating) {
        stars += '&#11088 ';

        count++;
      }
      const starSpan: string = `<span id='menu-info-rating'>${stars}</span>`;
      return starSpan;
    }
  };

  // if there is a address render it
  const getAddress = () => {
    if (!!address) {
      const addressDiv = `
        <span id='menu-info-address'>
          ${address.street} ${address.houseNumber} <br/> ${address.postCode} ${address.city} <br/> ${address.county}, ${address.country}
        </span>
      `;
      return addressDiv;
    }
  };

  const infoEl = `
    <div id='menu-info-content'>
      <img src=${image.path} alt=${image.alt}/>
      <div id='menu-info-details'>
        <h1>${title}</h1>
        ${getRating()}
        ${getAddress()}
      </div>
    </div>`;

  if (!!menuInfoEl) menuInfoEl.innerHTML = infoEl;

  return;
};

export default menuInfo;
