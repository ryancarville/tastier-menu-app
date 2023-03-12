'use-strict';
import { EFoodCategory } from '../../../enums';

/**
 * @description switch function to assign a category image
 * @param cat EFoodCategory
 * @returns string
 */
const dietaryIcon = (cat: EFoodCategory) => {
  let src: string = '';
  let alt: string = '';

  switch (cat) {
    case EFoodCategory.VEGAN:
      src = './assets/categories/vegan.png';
      alt = 'vegan';
      break;
    case EFoodCategory.VEGETARIAN:
      src = './assets/categories/vegetarian.png';
      alt = 'vegetarian';
      break;
    case EFoodCategory.BEEF:
      src = './assets/categories/beef.png';
      alt = 'beef';
      break;
    case EFoodCategory.CHICKEN:
      src = './assets/categories/chicken.png';
      alt = 'chicken';
      break;
    case EFoodCategory.LAMB:
      src = './assets/categories/lamb.png';
      alt = 'lamb';
      break;
    case EFoodCategory.TURKEY:
      src = './assets/categories/turkey.png';
      alt = 'turkey';
      break;
    case EFoodCategory.FISH:
      src = './assets/categories/fish.png';
      alt = 'fish';
      break;
    case EFoodCategory.GLUTEN_FREE:
      src = './assets/categories/gluten-free.png';
      alt = 'gluten free';
      break;
    case EFoodCategory.DAIRY_FREE:
      src = './assets/categories/dairy-free.png';
      alt = 'dairy free';
      break;
  }

  const img: string = `<img class='category-img' src=${src} alt=${alt}/>`;
  return img;
};

export default dietaryIcon;
