import  { useState } from "react";

const App = () => {
  const steps = ["Create Account", "Add Information", "Review & Submit"];
  const [currentStep, setCurrentStep] = useState(0);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    phone: "",
  });

  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleNext = () => {
    if (currentStep === 0) {
      if (!formData.firstName || !formData.lastName || !formData.email) {
        setError("Please fill out all fields.");
        return;
      }
    }

    if (currentStep === 1) {
      if (!formData.address || !formData.phone) {
        setError("Please fill out all fields.");
        return;
      }
    }

    setError("");
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const getProgressWidth = () => {
    return `${((currentStep + 1) / steps.length) * 100}%`;
  };

  const renderFormContent = () => {
    if (currentStep === 0) {
      return (
        <form className="flex flex-col gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleInputChange}
            className="border border-gray-300 p-3 rounded-lg"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleInputChange}
            className="border border-gray-300 p-3 rounded-lg"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className="border border-gray-300 p-3 rounded-lg"
          />
        </form>
      );
    } else if (currentStep === 1) {
      return (
        <form className="flex flex-col gap-4">
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleInputChange}
            className="border border-gray-300 p-3 rounded-lg"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleInputChange}
            className="border border-gray-300 p-3 rounded-lg"
          />
        </form>
      );
    } else if (currentStep === 2) {
      return (
        <div className="text-lg font-medium">
          Please review your information before submitting.
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-xl rounded-xl flex w-full max-w-6xl overflow-hidden">
        <div className="w-3/4 p-8 flex flex-col gap-8">
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div className="bg-blue-600 h-4 rounded-full" style={{ width: getProgressWidth() }}></div>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">{steps[currentStep]}</h1>
            {renderFormContent()}
            {error && <div className="text-red-500 font-semibold">{error}</div>}

            <div className="flex justify-between mt-4">
              <button
                onClick={handleBack}
                disabled={currentStep === 0}
                className={`px-4 py-2 rounded-lg font-semibold ${
                  currentStep === 0 ? "bg-gray-300 cursor-not-allowed" : "bg-gray-500 text-white"
                }`}
              >
                Back
              </button>

              <button
                onClick={handleNext}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold"
              >
                {currentStep === steps.length - 1 ? "Submit" : "Next"}
              </button>
            </div>
          </div>
        </div>

        <div className="w-1/4 bg-blue-50 p-6 flex flex-col justify-center">
          <div className="flex flex-col gap-4 text-lg font-medium">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`${
                  index < currentStep
                    ? "line-through text-gray-500"
                    : index === currentStep
                    ? "text-blue-600"
                    : "text-gray-400"
                }`}
              >
                {step}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
