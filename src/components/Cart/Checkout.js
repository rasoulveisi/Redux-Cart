import { useRef, useState } from "react";
import { Button } from "react-bootstrap";

const isEmpty = (value) => value.trim() === "";

const validPostalCode = (value) => value.trim().length === 5;

export const Checkout = (props) => {
  const [formValidation, setFormValidation] = useState({
    name: true,
    address: true,
    postalCode: true,
  });

  const nameRef = useRef("");
  const addressRef = useRef("");
  const postalCodeRef = useRef("");

  const confirmHandler = (event) => {
    event.preventDefault();

    const submitedName = nameRef.current.value;
    const submitedAddress = addressRef.current.value;
    const submitedPostalCode = postalCodeRef.current.value;

    const nameIsValid = !isEmpty(submitedName);
    const addressIsValid = !isEmpty(submitedAddress);
    const postalCodeIsValid = validPostalCode(submitedPostalCode);

    const formIsValid = nameIsValid && addressIsValid && postalCodeIsValid;

    setFormValidation({
      name: nameIsValid,
      address: addressIsValid,
      postalCode: postalCodeIsValid,
    });

    if (!formIsValid) return;

    props.onConfirm({
      name: submitedName,
      address: submitedAddress,
      postalCode: submitedPostalCode,
    });

    nameRef.current.value = "";
    addressRef.current.value = "";
    postalCodeRef.current.value = "";
  };

  return (
    <form onSubmit={confirmHandler}>
      <div className="d-flex flex-column">
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameRef} />
        {!formValidation.name && (
          <p className="text-danger">Please enter a valid name!</p>
        )}
      </div>

      <div className="d-flex flex-column">
        <label htmlFor="address">Address</label>
        <input type="text" id="address" ref={addressRef} />
        {!formValidation.address && (
          <p className="text-danger">Please enter a valid address!</p>
        )}
      </div>

      <div className="d-flex flex-column">
        <label htmlFor="postal">Postal Code</label>
        <input type="number" id="postal" ref={postalCodeRef} />
        {!formValidation.postalCode && (
          <p className="text-danger">
            Please enter a valid postal code with 5 character!
          </p>
        )}
      </div>

      <div className="mt-5 d-flex gap-2">
        <Button type="submit">Confirm</Button>
        <Button type="button" onClick={props.onCancel}>
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default Checkout;
