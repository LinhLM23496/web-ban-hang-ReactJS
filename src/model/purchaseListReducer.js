import * as Actions from '../controller/ActionTypes';

let initialState = [
    // {
    //     cartId: ,
    //     products: [],
    //     total: ,
    //     totalAmount: 
    // }
];

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
                case 'delete_product_purchase_detail': {
                    const data = action.data;
                    if(!data) return state;
                    return [...data];
                }
            }
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
