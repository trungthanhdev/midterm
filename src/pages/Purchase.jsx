import { useParams, useNavigate } from "react-router-dom";

const PurchaseInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="container mt-5 text-center">
      <h2 className="mb-3">Purchase Information</h2>
      <p>Product ID: <strong>{id}</strong></p>

      <div className="mt-4">
        <button className="btn btn-secondary me-3" onClick={() => navigate(-1)}>
           Back
        </button>
        <button className="btn btn-success">Proceed to Payment</button>
      </div>
    </div>
  );
};

export default PurchaseInfo;
