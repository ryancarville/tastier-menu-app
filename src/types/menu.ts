'use-strict';
import { EFoodCategory } from '../enums';

// interface for a address
export interface IAddress {
  street: string;
  houseNumber: string;
  postCode: string;
  city: string;
  county: string;
  country: string;
}
// interface for menu info
export interface IMenuInfo {
  title: string;
  rating: number;
  address: IAddress;
  image: {
    path: string;
    alt: string;
  };
}

// interface for a food item
export interface IFoodItem extends Record<string,any> {
  name: string;
  price: number;
  description?: string;
  category?: EFoodCategory[];
  imgSrc?: string;
}
// interface for a beverage item
export interface IBeverageItem extends Record<string, any> {
  name: string;
  price: number;
  description?: string;
  imgSrc?: string;
}
// interface for a menu item
export interface IMenuItem extends IFoodItem, IBeverageItem {}

// interface for a menu section
export interface IMenuSection extends Record<string, any> {
  title: string;
  items: IMenuItem[];
}
// interface for a menu
export interface IMenu extends Record<string, any> {
  starters?: IMenuSection;
  mains: IMenuSection;
  desserts?: IMenuSection;
  beverages: IMenuSection;
}
