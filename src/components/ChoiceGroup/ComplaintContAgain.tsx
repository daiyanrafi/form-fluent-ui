import React, { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

interface Complaint3FormData {
  hasConfession: string;
  concessionTypes: string[];
  aboutYou: string;
  shareInformation: boolean;
  identifyAsAboriginal: string;
}

const Complaint3Page: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<Complaint3FormData>();
  const navigate = useNavigate();

  // Load form data from sessionStorage on component mount
useEffect(() => {
    const storedFormData = sessionStorage.getItem('complaint3FormData');
    if (storedFormData) {
      const parsedData = JSON.parse(storedFormData);
  
      // Set form data using setValue for each field
      Object.keys(parsedData).forEach((key) => {
        if (key === 'concessionTypes') {
          // Check if it's an array before iterating
          if (Array.isArray(parsedData[key])) {
            // For checkbox array, setValue with an array
            setValue(key, parsedData[key]);
          }
        } else {
          setValue(key as keyof Complaint3FormData, parsedData[key]);
        }
      });
    }
  }, [setValue]);
  
  

  const onSubmit: SubmitHandler<Complaint3FormData> = (data) => {
    // Save user data to sessionStorage
    sessionStorage.setItem('complaint3FormData', JSON.stringify(data));
    console.log('Form data saved to sessionStorage:', data);

    // Continue with navigation
    navigate('/final-sub', { state: { formData: data } });
  };

  const goToPreviousPage = () => {
    navigate('/complaint-cont'); 
  };

  console.log('Rendering Complaint3Page component.');

  return (
    // <div className="p-8 max-w-screen-lg mx-auto bg-white shadow-md rounded-md">
    <div className="p-8 max-w-lg mx-auto bg-amber-200 shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-4 mt-2">Complaint-Again</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <div className="flex flex-col">
          <label htmlFor="hasConfession" className="text-sm font-semibold mb-2">
          Do you currently have a concession card? If so, which one?
          </label>
          <select
            {...register('hasConfession', { required: 'This field is required' })}
            id="hasConfession"
            name="hasConfession"
            className="select select-primary w-full lg:w-1/2 md:w-3/4"
          >
            <option value="" className="text-sm font-semibold mb-2">
              Select an option
            </option>
            <option value="yes" className="text-sm font-semibold mb-2">
              Yes
            </option>
            <option value="no" className="text-sm font-semibold mb-2">
              No
            </option>
          </select>
          {errors.hasConfession && (
            <span className="text-red-500">{errors.hasConfession.message}</span>
          )}
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-2">Concession Type</label>
          <div className="flex flex-col">
            <label htmlFor="concessionTypeA" className="text-sm font-semibold mb-2">
              <input
                {...register('concessionTypes')}
                type="checkbox"
                id="concessionTypeA"
                name="concessionTypes"
                value="A"
                className="mr-2"
              />
              Concession Type A
            </label>
            <label htmlFor="concessionTypeB" className="text-sm font-semibold mb-2">
              <input
                {...register('concessionTypes')}
                type="checkbox"
                id="concessionTypeB"
                name="concessionTypes"
                value="B"
                className="mr-2"
              />
              Concession Type B
            </label>
            <label htmlFor="concessionTypeC" className="text-sm font-semibold mb-2">
              <input
                {...register('concessionTypes')}
                type="checkbox"
                id="concessionTypeC"
                name="concessionTypes"
                value="C"
                className="mr-2"
              />
              Concession Type C
            </label>
          </div>
          {errors.concessionTypes && (
            <span className="text-red-500">{errors.concessionTypes.message}</span>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="aboutYou" className="text-sm font-semibold mb-2">
          Is there anything about you or your personal circumstances that we need to consider, 
          that will help us with your complaint?
          </label>
          <textarea
            {...register('aboutYou', { required: 'This field is required' })}
            id="aboutYou"
            name="aboutYou"
            className="textarea textarea-primary w-full"
          />
          {errors.aboutYou && (
            <span className="text-red-500">{errors.aboutYou.message}</span>
          )}
        </div>
        <div className="flex items-center">
          <input
            {...register('shareInformation')}
            type="checkbox"
            id="shareInformation"
            name="shareInformation"
            className="mr-2"
          />
          <label htmlFor="shareInformation" className="text-sm font-semibold mb-2">
          I agree for this information to be shared with relevant 
          parties to assist with the complaint 
          </label>
        </div>
        <div className="flex flex-col">
          <label htmlFor="identifyAsAboriginal" className="text-sm font-semibold mb-2">
          Do you identify as an Aboriginal or Torres Strait Islander person?
          </label>
          <textarea
            {...register('identifyAsAboriginal')}
            id="identifyAsAboriginal"
            name="identifyAsAboriginal"
            className="textarea textarea-primary w-full"
          />
        </div>

        <div className="flex justify-between">
          <button
            type="button"
            className="px-4 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-600 focus:outline-none transition duration-300"
            onClick={goToPreviousPage}
          >
            Previous
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none transition duration-300"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Complaint3Page;
