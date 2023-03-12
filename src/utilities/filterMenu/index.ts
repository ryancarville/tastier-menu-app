'use-strict';
import { EFoodCategory } from '../../enums';
import { IMenu } from '../../types/menu';
import objectSearch from '../common';

/**
 * @description takes in a menu object and filter value then return a new menu object with the matched results
 * @param value EFoodCategory
 * @param menu IMenu - should always pass the full menu
 * @returns filtered menu object
 */
const filterMenu = (
  value: EFoodCategory,
  menu: IMenu
): IMenu | string => {
  // if the filtered value is empty or null return the entire menu
  if (value === EFoodCategory.ALL || value === null) {
    let results: IMenu | string = menu;
    if (typeof results === 'object') return results;
    else {
      return results;
    }
  } // run the filter. If nothing matched, return a error string
  else {
    const results = objectSearch(menu, 'category', value);
    if (!!Object.keys(results).length) return results as IMenu;
    return `No items with the category of '${value}'.`;
  }
};
export default filterMenu;
