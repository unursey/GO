import {
    addOpenModal, 
    addCloseModal, 
    addOpenBurger, 
    addCloseBurger 
} from './control.js';

import {
    acc
} from './acc.js'


export const init = () => {
    addOpenModal();
    addCloseModal();
    addOpenBurger();
    addCloseBurger();
    acc();

}