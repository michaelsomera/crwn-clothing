import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {compose } from 'redux';

import { selectCartItems } from '../../redux/cart/cart.selector';
import CartDropdown from './cart-dropdown.component';

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

const CartDropdownContainer = compose(
    connect(mapStateToProps)
)(CartDropdown);

export default CartDropdownContainer;