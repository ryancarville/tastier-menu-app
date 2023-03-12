'use-strict';
import { IMenuItem } from '../../types/menu';

/**
 * @description object search
 * @param obj
 * @param searchType
 * @param term
 * @returns object
 */

export const objectSearch = (
  obj: { [index: string]: any },
  searchType: string,
  term: string
): {} => {
  // if no object passes return a empty object
  if (!!!Object.keys(obj).length || typeof obj !== 'object') return {};
  // deep clone the passed object
  const results = JSON.parse(JSON.stringify(obj));
  // extract the object keys
  const keys = Object.keys(obj);
  // loop thru the keys
  keys.forEach((key: string) => {
    // clear the keys collection in preparation for results
    results[key].items = [];
    // loop thru each item in collection
    obj[key].items.forEach((item: IMenuItem) => {
      let currItemValue = item[searchType];
      // if comparison value is a string covert to lower case
      if (typeof currItemValue === 'string') {
        currItemValue = currItemValue.toLowerCase();
        term = term.toLowerCase();
      }
      // compare the values.  If true push to the results collection
      if (!!currItemValue && !!currItemValue.includes(term))
        results[key].items.push(item);
    });
    // if there are no results for this key delete the entry
    if (!!!results[key].items.length) delete results[key];
  });

  return results;
};
