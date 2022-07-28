import * as Actions from '../controller/ActionTypes';

let initialState = [];

const purchaseListReducer = (state = initialState, action) => {
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
    switch (action.type){
        case Actions.UPDATE_PURCHASE_LIST: {
            switch (action.ttype) {
                case 'add_purchase_list': {
                    const data = action.data;
                    if(!data) return state;
                    return [
                        ...state,
                        {
                            cartId: action.data.id,
                            products: action.data.products,
                            total: action.data.total.toFixed(0)*1,
                            totalAmount: action.data.totalAmount.toFixed(0)*1
                        }
                    ];
                }
                case 'delelte_purchase_purchaselist': {
                    const id = action.data;
                    if(!id) return state;
                    state = state.filter((cart) => cart.cartId !== id)
                    console.log(state)
                    return [...state];
                }
                case 'btndown_purchase_list': {
                    const id = action.data.id
                    const cartId = action.data.cartId
                    const newState = [...state]
                    let carts = newState[cartId].products
                    index = findProductInCart(carts, id);
                    if(index !== -1){
                        if(carts[index].quantity < 2){
                            carts[index].quantity = 1
                        } else
                        carts[index].quantity += -1;
                    }
                    return [...newState]; 
                }
                case 'btnup_purchase_list': {
                    const id = action.data.id
                    const cartId = action.data.cartId
                    const newState = [...state]
                    let carts = newState[cartId].products
                    index = findProductInCart(carts, id);
                    carts[index].quantity += 1;
                    return [...newState]; 
                }
                case 'delete_purchase_list': {
                    const id = action.data.id
                    const cartId = action.data.cartId
                    console.log(state)
                    console.log(id);
                    console.log(cartId);
                    let newProducts = state[cartId].products.filter(product => product.id !== id)
                    let newTotal = newProducts.reduce((total, product) => total + product.quantity * (+product.price), 0)
                    let cartUpdate = {...state[cartId], products: newProducts, total:newTotal, totalAmount: 2}
                    console.log(newProducts);
                    console.log(newTotal);
                    console.log(cartUpdate);
                    // console.log(newState)
                    // state[cartId].products = [newState]
                    // console.log(state)
                    const newState = state.map((cart, index)=> {
                        if(index === cartId){
                            return cartUpdate
                        }
                        return cart
                    })
                    return newState;
                    // return console.log(state); 
                }


            }
            // console.log(action.payoad)
            // return [...state];
        }
        case Actions.DELETE_CART_PURCHASE: {
            // let cartId = action.payload.cartId
            // let productId = action.payload.productId
            // let key = action.payload.key
            // console.log(state)
            // console.log(productId)
            // console.log(state[cartId].carts[key].product.id)
            // state = state[cartId].carts[key].product.filter((product) => product.id !== productId)
            // return console.log({...state});
        } 
        default: return state;
        }
    }
export default purchaseListReducer;
