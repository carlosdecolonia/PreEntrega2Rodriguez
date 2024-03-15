import { BsCart } from "react-icons/bs";
import Badge from 'react-bootstrap/Badge'
import "./CartWidget.css";

const CartWidget = ({counter}) => {
    return (
    <div className="cart-widget-container">
        <button>
        <BsCart />
        </button>
        <div className="cart-icon">
            <Badge bg="danger">{counter}</Badge>
            <BsCart color='violet' fontSize={'2.5rem'}/>
        </div>
        <span className="cart-number">0</span>
    </div>
    );
};

export default CartWidget;