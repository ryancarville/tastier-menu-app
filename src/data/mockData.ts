import { EFoodCategory } from '../enums'
import { IMenu, IMenuInfo } from '../types/menu';

// mock data for menu info
export const menuData: IMenuInfo = {
  title: `Caesar's Palace`,
  rating: 4.5,
  address: {
    street: 'Baarstrasse',
    houseNumber: '23',
    postCode: '6012',
    city: 'Cham',
    county: 'Zug',
    country: 'Switzerland'
  },
  image: {
    path: './assets/menuAssets/logo.jpeg',
    alt: 'Caesars Palace'
  }
};
// exported menu data variable
export const mockMenu: IMenu = {
  starters: {
    title: 'Starters',
    items: [
      {
        name: 'Grape Leafs',
        price: 8.99,
        category: [
          EFoodCategory.VEGETARIAN,
          EFoodCategory.VEGAN,
          EFoodCategory.DAIRY_FREE
        ],
        description: 'Dolor anim non non ullamco consectetur ullamco.',
        imgSrc: './assets/menuImgs/grape-leaves.jpg'
      },
      {
        name: 'Chicken Souvlaki',
        price: 11.99,
        description: 'Labore enim ex sint eu ullamco eu sunt eiusmod aliquip',
        imgSrc: './assets/menuImgs/chicken-souvlaki.jpg',
        category: [EFoodCategory.CHICKEN]
      },
      {
        name: 'Hummus',
        price: 2.99,
        description: 'ex anim. Adipisicing aliqua tempor fugiat ullamco',
        category: [
          EFoodCategory.VEGETARIAN,
          EFoodCategory.VEGAN,
          EFoodCategory.DAIRY_FREE
        ],
        imgSrc: './assets/menuImgs/hummus.jpg'
      },
      {
        name: 'Tzatziki',
        price: 4.99,
        description: 'non anim ea officia ullamco adipisicing',
        category: [EFoodCategory.VEGETARIAN]
      }
    ]
  },
  mains: {
    title: 'Mains',
    items: [
      {
        name: 'Greek Salad',
        price: 9.99,
        description:
          'ex laboris deserunt. In irure ex non eiusmod voluptate minim.',
        category: [EFoodCategory.VEGETARIAN],
        imgSrc: './assets/menuImgs/greek_salad.jpg'
      },
      {
        name: 'Souvlaki Beef Shish Kebabs',
        price: 19.99,
        description: ' Laboris nisi irure enim ipsum elit nisi in ea fugiat',
        category: [EFoodCategory.BEEF]
      },
      {
        name: 'Chicken Gyros with Tzatziki',
        price: 9.99,
        description:
          'eu tempor magna. Dolore pariatur consequat excepteur irure',
        category: [EFoodCategory.CHICKEN],
        imgSrc: './assets/menuImgs/chicken-gyros-with-tzatziki.jpg'
      },
      {
        name: 'Lemon Roasted Baby Potatoes',
        price: 9.99,
        description:
          'labore magna cillum exercitation veniam nostrud est exercitation.',
        category: [EFoodCategory.VEGETARIAN, EFoodCategory.VEGAN]
      },
      {
        name: 'Homemade Pita Bread',
        price: 1.99,
        category: [EFoodCategory.VEGETARIAN, EFoodCategory.VEGAN]
      },
      {
        name: 'Lamb Shanks',
        price: 39.99,
        description:
          'Ut mollit sunt eu culpa labore dolor consequat Lorem fugiat.',
        category: [EFoodCategory.LAMB],
        imgSrc: './assets/menuImgs/lamb-shanks.jpg'
      },
      {
        name: 'Greek Salmon',
        price: 26.99,
        description:
          'eu tempor magna. Dolore pariatur consequat excepteur irure',
        category: [EFoodCategory.FISH],
        imgSrc: './assets/menuImgs/greek-salmon.jpg'
      },
      {
        name: 'Chickpea Salad',
        price: 14.99,
        description:
          'labore magna cillum exercitation veniam nostrud est exercitation.',
        category: [EFoodCategory.VEGETARIAN],
        imgSrc: './assets/menuImgs/chickpea-salad.jpg'
      },
      {
        name: 'Lemon Garlic Whole Roasted Chicken',
        price: 29.99,
        description: ' Laboris nisi irure enim ipsum elit nisi in ea fugiat',
        category: [EFoodCategory.CHICKEN],
        imgSrc: './assets/menuImgs/lemon-garlic-whole-roast-chicken.jpg'
      },
      {
        name: 'Mediterranean Turkey Burger',
        price: 23.99,
        description:
          'labore magna cillum exercitation veniam nostrud est exercitation.',
        category: [EFoodCategory.TURKEY]
      },
      {
        name: 'Greek Fries',
        price: 9.99,
        description:
          'ex laboris deserunt. In irure ex non eiusmod voluptate minim.',
        category: [EFoodCategory.VEGETARIAN]
      },
      {
        name: 'Mediterranean Orzo Pasta Salad',
        price: 9.99,
        description:
          'eu tempor magna. Dolore pariatur consequat excepteur irure',
        category: [EFoodCategory.VEGETARIAN],
        imgSrc: './assets/menuImgs/mediterranean-orzo-pasta-salad.jpg'
      }
    ]
  },
  desserts: {
    title: 'Desserts',
    items: [
      {
        name: 'Baklava',
        price: 3.99,
        description: 'Labore enim ex sint eu ullamco eu sunt eiusmod aliquip',
        category: [EFoodCategory.VEGAN, EFoodCategory.VEGETARIAN]
      },
      {
        name: 'Honey Cake',
        price: 7.99,
        description: 'Dolor anim non non ullamco consectetur ullamco.',
        category: [EFoodCategory.VEGETARIAN],
        imgSrc: './assets/menuImgs/honey-cake.jpg'
      },
      {
        name: 'Fresh Fruit',
        price: 12.99,
        description: 'Dolor anim non non ullamco consectetur ullamco.',
        category: [EFoodCategory.VEGETARIAN, EFoodCategory.VEGAN, EFoodCategory.DAIRY_FREE],
      }
    ]
  },
  beverages: {
    title: 'Beverages',
    items: [
      {
        name: 'Water',
        price: 2.99,
        description: 'Dolor anim non non ullamco consectetur ullamco.'
      },
      {
        name: 'Coca-Cola',
        price: 3.99,
        description: 'Dolor anim non non ullamco consectetur ullamco.'
      },
      {
        name: 'Coca-Cola Zero',
        price: 3.99,
        description: 'Dolor anim non non ullamco consectetur ullamco.'
      },
      {
        name: 'Fanta',
        price: 3.99,
        description: 'Dolor anim non non ullamco consectetur ullamco.'
      },
      {
        name: 'Ice Tea',
        price: 4.99,
        description: 'Dolor anim non non ullamco consectetur ullamco.'
      },
      {
        name: 'Beer',
        price: 8.99,
        description: 'Dolor anim non non ullamco consectetur ullamco.'
      }
    ]
  }
};