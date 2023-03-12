'use-strict';
import { IMenu } from '../../types/menu';
import { objectSearch } from '../common';

/**
 * @description takes in a menu object and filter value then return a new menu object with the matched results
 * @param value string
 * @param menu IMenu - should always pass the current filtered menu
 * @returns filtered menu object
 */

const searchMenu = (value: string, menu: IMenu): IMenu | string => {
  const results = objectSearch(menu, 'name', value);
  if (!!Object.keys(results).length) return results as IMenu;
  return `No items match '${value}'.`;
};

export default searchMenu;
