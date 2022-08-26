import { Offcanvas } from "react-bootstrap";

const ShoppingCart = () => {
  return (
    <Offcanvas show={true}>
      <Offcanvas.Header>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
    </Offcanvas>
  );
};

export default ShoppingCart;
