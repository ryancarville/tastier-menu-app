'use-strict';
import { EFoodCategory } from '../../../enums';
import type { IMenuItem } from '../../../types/menu';
import dietaryIcon from '../../atoms/dietaryIcon';

/**
 * @description create a new template literal in the form of a menu card
 * @param item IMenuItem
 * @returns string
 */

const menuCard = (item: IMenuItem): string => {
  const { name, imgSrc, price, category, description } = item;

  const getImg = (): string => {
    if (!!imgSrc)
      return `<img class='menu-card-img' src=${imgSrc} alt=${name}/>`;
    return '';
  };

  const getDesc = (): string => {
    if (!!description) return `<span>${description}</span>`;
    return '';
  };

  const getCats = (): string => {
    if (!!category && category.length) {
      return `
        <span class='category-wrapper'>
          ${category.map((cat: EFoodCategory) => dietaryIcon(cat)).join(' ')}
        </span>
      `;
    }
    return '';
  };

  const card: string = `
    <div class='menu-item-card'>
      ${getImg()}
      <span class='menu-card-content-wrapper'>
        <span class='menu-card-text-wrapper'>
          <span class='name-price-wrapper'>
            <h4>${name}</h4>
            <span>${price}</span>
          </span>
          ${getDesc()}
        </span>
        ${getCats()}
        </span>
      </span>
    </div>
  `;

  return card;
};

export default menuCard;
