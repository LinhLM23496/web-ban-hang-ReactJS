import * as Actions from '../controller/ActionTypes';

let initialState = []; 

const purchaseReducer = (state = initialState, action) => {
    let index = -1;
    const findProductInCart = (cart, product) => {
        let index = -1;
        if( cart.length > 0) {
            for(var i=0; i<cart.length; i++){
                if(cart[i].product.id === product.id){
                    index = i;
                    break;
                }
            }
        }
        return index;
    }
    switch (action.type){
        case Actions.UPDATE_PURCHASE: {
            switch (action.ttype) {
                case 'add_purchase': {
                    const data = action.data;
                    if(!data) return state;
                    return [
                        ...state,
                        {
                            cartId: action.data.id,
                            cartName: action.data.name,
                            total: action.data.total.toFixed(0)*1,
                            totalVax: action.data.totalVax.toFixed(0)*1,
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
            }
        }
        default: return state;
        }
    }
export default purchaseReducer;
