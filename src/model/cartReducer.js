import * as Actions from '../controller/ActionTypes';

// var initialState = [];
let cart = [];

const cartReducer = (state = cart, action) => {
    let index = -1;
    const findProductInCart = (cart, id) => {
        let index = -1;
        if( cart.length > 0) {
            for(var i=0; i<cart.length; i++){
                if(cart[i].id === id){
                    index = i;
                    break;
                }
            }
        }
        return index;
    }
    switch (action.type) {
        case Actions.UPDATE_CART: {
            switch (action.ttype) {
                case 'btnup_cart':
                case 'add_cart': {
                    const { id } = action.data;
                    index = findProductInCart(state, id);
                    if(index !== -1){
                        state[index].quantity += 1;
                    } else {
                        return [...state,
                            {
                                id: id,
                                quantity: 1
                            }
                        ];
                    }
                }
                case 'delete_cart': {
                    const id = action.data;
                    if(!id) return state;
                    state = state.filter((cart) => cart.id !== id)
                    return [...state];
                }
                case 'btndown_cart': {
                    const id = action.data
                    console.log(id)
                    index = findProductInCart(state, id);
                    if(index !== -1){
                        if(state[index].quantity < 2){
                            state[index].quantity = 1
                        } else
                        state[index].quantity += -1;
                    }
                    console.log(state)
                    return [...state]; 
                }
            }
        }   
        case Actions.DELETE_PURCHASE: {
            return [];
        }
        default: return state;
    }
    // let cart_id = Math.floor(Math.random() * 101);
    // if (!id) return state;
    // if(state[id] == id) {
    //     // state[id] = state[id] + 1;
    //     console.log('trung id')
    //     return {
    //         ...state
    //     };
    // } else {
    //     return [
    //         ...state,
    //         {
    //             id: id,
    //             quantity: 1
    //         }
    //     ]
    // }
    }
export default cartReducer;
