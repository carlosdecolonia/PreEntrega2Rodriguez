import { BsCart } from "react-icons/bs";
import Badge from 'react-bootstrap/Badge'
import "./CartWidget.css";

const CartWidget = ({counter}) => {
    return (
    <div className="cart-widget-container">
        <button>
        <BsCart />
        </button>
        <div style={{display:"flex"}}>
            <Badge bg="danger">{counter}</Badge>
            <BsCart color='violet' fontSize={'1.5rem'}/>
        </div>
        <span className="cart-number">0</span>
    </div>
    );
};

export default CartWidget;