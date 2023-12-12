import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

interface IncidentFormData {
  incidentAddress: string;
  address1: string;
  city: string;
  postalCode: string;
  state: string;
}

const IncidentPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IncidentFormData>();
  const navigate = useNavigate();

  // Load form data from sessionStorage on component mount
  React.useEffect(() => {
    const storedFormData = sessionStorage.getItem('incidentFormData');
    if (storedFormData) {
      const parsedData = JSON.parse(storedFormData);

      // Set form data using setValue for each field
      Object.keys(parsedData).forEach((key) => {
        setValue(key as keyof IncidentFormData, parsedData[key]);
      });
    }
  }, [setValue]);

  const onSubmit: SubmitHandler<IncidentFormData> = (data) => {
    // Save user data to sessionStorage
    sessionStorage.setItem('incidentFormData', JSON.stringify(data));
    console.log('Form data saved to sessionStorage.');

    // Continue with navigation
    navigate('/complaint', { state: { formData: data } });
  };

  const goToPreviousPage = () => {
    navigate('/your-representative');
  };

  console.log('Rendering IncidentPage component.');

  return (
    <div className="p-8 max-w-lg mx-auto bg-white shadow-md rounded-md">
      <h1 className="text-3xl font-bold mb-4">Incident Address</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <div className="flex flex-col">
          <label htmlFor="incidentAddress" className="text-sm font-semibold mb-2">Incident Address</label>
          <input
            {...register('incidentAddress', { required: 'Incident Address is required' })}
            type="text"
            id="incidentAddress"
            name="incidentAddress"
            className="input input-primary w-full"
          />
          {errors.incidentAddress && (
            <span className="text-red-500">{errors.incidentAddress.message}</span>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="address1" className="text-sm font-semibold mb-2">Address 1</label>
          <input
            {...register('address1', { required: 'Address 1 is required' })}
            type="text"
            id="address1"
            name="address1"
            className="input input-primary w-full"
          />
          {errors.address1 && (
            <span className="text-red-500">{errors.address1.message}</span>
          )}
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="city" className="text-sm font-semibold mb-2">City</label>
            <input
              {...register('city', { required: 'City is required' })}
              type="text"
              id="city"
              name="city"
              className="input input-primary w-full"
            />
            {errors.city && (
              <span className="text-red-500">{errors.city.message}</span>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="postalCode" className="text-sm font-semibold mb-2">Postal Code</label>
            <input
              {...register('postalCode', {
                required: 'Postal Code is required',
                pattern: {
                  value: /^\d+$/,
                  message: 'Postal Code should only contain numbers',
                },
              })}
              type="text"
              id="postalCode"
              name="postalCode"
              className="input input-primary w-full"
            />
            {errors.postalCode && (
              <span className="text-red-500">{errors.postalCode.message}</span>
            )}
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="state" className="text-sm font-semibold mb-2">State</label>
          <input
            {...register('state', { required: 'State is required' })}
            type="text"
            id="state"
            name="state"
            className="input input-primary w-full"
          />
          {errors.state && (
            <span className="text-red-500">{errors.state.message}</span>
          )}
        </div>

        <div className="flex justify-between">
          <button
            type="button"
            className="px-4 py-2 font-semibold text-white bg-gray-500 rounded-md hover:bg-gray-600 focus:outline-none transition duration-300"
            onClick={goToPreviousPage}
          >
            Previous
          </button>
          <button
            type="submit"
            className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none transition duration-300"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default IncidentPage;
