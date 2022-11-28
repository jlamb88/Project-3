import { createContext, useState } from 'react';
import { productArray } from './productStore';

const CartContext = createContext({
    items: [],
    getProductQuantity: () => {},
});