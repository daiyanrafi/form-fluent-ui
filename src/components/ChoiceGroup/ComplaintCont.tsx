import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

interface ComplaintContinueFormData {
  briefComplaint: string;
  seekingDescription: string;
}

const ComplaintContinuePage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ComplaintContinueFormData>();
  const navigate = useNavigate();

  // Load form data from sessionStorage on component mount
  React.useEffect(() => {
    const storedFormData = sessionStorage.getItem('complaintContinueFormData');
    if (storedFormData) {
      const parsedData = JSON.parse(storedFormData);

      // Set form data using setValue for each field
      Object.keys(parsedData).forEach((key) => {
        setValue(key as keyof ComplaintContinueFormData, parsedData[key]);
      });
    }
  }, [setValue]);

  const onSubmit: SubmitHandler<ComplaintContinueFormData> = (data) => {
    // Save user data to sessionStorage
    sessionStorage.setItem('complaintContinueFormData', JSON.stringify(data));
    console.log('Form data saved to sessionStorage.');

    // navigation
    navigate('/cont-again', { state: { formData: data } });
  };

  const goToPreviousPage = () => {
    navigate('/complaint');
  };

  console.log('Rendering ComplaintContinuePage component.');

  return (
    <div className="p-8 max-w-lg mx-auto bg-amber-200 shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-8 mt-2">Complaint (Continue)</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <div className="flex flex-col">
          <label htmlFor="briefComplaint" className="text-sm font-semibold mb-2">Please brief describe the complaint including an outline of any responses the provider has given so far?</label>
          <textarea
            {...register('briefComplaint', { required: 'Brief Complaint is required' })}
            id="briefComplaint"
            name="briefComplaint"
            className="textarea textarea-primary w-full"
          />
          {errors.briefComplaint && (
            <span className="text-red-500">{errors.briefComplaint.message}</span>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="seekingDescription" className="text-sm font-semibold mb-2">What are you or the customer seeking to resolve the compaint?</label>
          <textarea
            {...register('seekingDescription', { required: 'Seeking Description is required' })}
            id="seekingDescription"
            name="seekingDescription"
            className="textarea textarea-primary w-full"
          />
          {errors.seekingDescription && (
            <span className="text-red-500">{errors.seekingDescription.message}</span>
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
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default ComplaintContinuePage;