export const BillingDetails = ({ subtotal, discount, total }) => {
  return (
    <div className="billing-details">
      <p className="billing-row">
        Subtotal:
        <span>${subtotal}</span>
      </p>
      <p className="billing-row discount">
        Discount:
        <span>- ${discount}</span>
      </p>
      <h1 className="billing-row">
        Total:
        <span>${total}</span>
      </h1>
    </div>
  );
};
