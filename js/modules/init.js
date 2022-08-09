import {
    addOpenModal, 
    addCloseModal, 
    addOpenBurger, 
    addCloseBurger,
} from './control.js';

import {
    acc
} from './acc.js';

import { swiper } from './slider.js';
import { valid } from './valid.js';

export const init = () => {
    addOpenModal();
    addCloseModal();
    addOpenBurger();
    addCloseBurger();
    acc();
    swiper;
    valid();
}
