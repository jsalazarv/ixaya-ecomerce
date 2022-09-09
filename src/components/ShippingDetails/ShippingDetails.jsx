export const ShippingDetails = ({ address, city, state, zipCode, phone }) => {
  return (
    <div>
      <h1 className="text-2xl mb-2">Shipping details</h1>
      <p>{address}</p>
      <p>
        {city}, {state}, {zipCode}
      </p>
      <p>Phone: {phone}</p>
    </div>
  );
};
