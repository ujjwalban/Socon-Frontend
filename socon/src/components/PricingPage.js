import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const pricingPlans = [
  {
    title: "Basic",
    price: "$19.99/month",
    features: ["1 Website", "10GB Storage", "24/7 Support"],
  },
  {
    title: "Standard",
    price: "$39.99/month",
    features: ["3 Websites", "50GB Storage", "Priority Support"],
  },
  {
    title: "Premium",
    price: "$59.99/month",
    features: ["Unlimited Websites", "200GB Storage", "Dedicated Support"],
  },
];

const PricingPage = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Our Pricing Plans</h1>
      <div className="row justify-content-center">
        {pricingPlans.map((plan, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card shadow-sm border-light rounded">
              <div className="card-body text-center">
                <h5 className="card-title">{plan.title}</h5>
                <p className="card-text display-4 text-primary">{plan.price}</p>
                <ul className="list-unstyled">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="mb-2">
                      <i className="bi bi-check-circle text-success"></i>{" "}
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="btn btn-primary w-100">Choose Plan</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;
