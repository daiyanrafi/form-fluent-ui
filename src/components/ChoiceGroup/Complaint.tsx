import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

interface ComplaintFormData {
  nameShop: string;
  whatService: string;
  accountNumber: string;
}

const ComplaintPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ComplaintFormData>();
  const navigate = useNavigate();

  // Load form data from sessionStorage on component mount
  React.useEffect(() => {
    const storedFormData = sessionStorage.getItem('complaintFormData');
    if (storedFormData) {
      const parsedData = JSON.parse(storedFormData);

      // Set form data using setValue for each field
      Object.keys(parsedData).forEach((key) => {
        setValue(key as keyof ComplaintFormData, parsedData[key]);
      });
    }
  }, [setValue]);

  const onSubmit: SubmitHandler<ComplaintFormData> = (data) => {
    // Save user data to sessionStorage
    sessionStorage.setItem('complaintFormData', JSON.stringify(data));
    console.log('Form data saved to sessionStorage.');

    // Continue with navigation
    navigate('/complaint-cont', { state: { formData: data } });
  };

  const goToPreviousPage = () => {
    navigate('/incident');
  };

  console.log('Rendering ComplaintPage component.');

  return (
    <div className="p-8 max-w-lg mx-auto bg-white shadow-md rounded-md">
      <h1 className="text-3xl font-bold mb-10">Complaint</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="nameShop" className="text-sm font-semibold mb-2">Name of supplier you wish to complain about</label>
            <select
              {...register('nameShop', { required: 'Name Shop is required' })}
              id="nameShop"
              name="nameShop"
              className="select select-primary w-full"
            >
              <option value="">Select Supplier</option>
              <option value="a">a</option>
              <option value="b">b</option>
              <option value="c">c</option>
            </select>
            {errors.nameShop && (
              <span className="text-red-500">{errors.nameShop.message}</span>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="whatService" className="text-sm font-semibold mb-2">What service is the compaint about?</label>
            <select
              {...register('whatService', { required: 'What Service is required' })}
              id="whatService"
              name="whatService"
              className="select select-primary w-full"
            >
              <option value="">Select Service</option>
              <option value="x">x</option>
              <option value="y">y</option>
              <option value="z">z</option>
            </select>
            {errors.whatService && (
              <span className="text-red-500">{errors.whatService.message}</span>
            )}
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="accountNumber" className="text-sm font-semibold mb-2">Account Number (If appicable)</label>
          <input
            {...register('accountNumber', {
              required: 'Account Number is required',
              pattern: {
                value: /^\d+$/,
                message: 'Account Number should only contain numbers',
              },
            })}
            type="text"
            id="accountNumber"
            name="accountNumber"
            className="input input-primary w-full"
          />
          {errors.accountNumber && (
            <span className="text-red-500">{errors.accountNumber.message}</span>
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

export default ComplaintPage;
