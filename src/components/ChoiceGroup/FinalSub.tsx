import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

interface SubmissionFormData {
    bestTime: string;
    howDidYouHear: string;
    attachment: FileList;
    briefAboutCountry: string;
    isRobot: boolean;
}

const FinalSubmissionPage: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SubmissionFormData>();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<SubmissionFormData> = (data) => {
        // Save user data to sessionStorage
        sessionStorage.setItem('finalSubmissionFormData', JSON.stringify(data));
        console.log('Form data saved to sessionStorage:', data);

        // Continue with navigation or other actions
        // You may want to redirect to a success page or perform additional logic
        // For now, let's just log a message and navigate to the next page
        console.log('Submitting data:', data);
        navigate('/success-page'); // Replace with the actual success page route
    };

    const goToPreviousPage = () => {
        navigate('/cont-again'); // Replace with the actual previous page route
    };

    return (
        <div className="p-8 max-w-screen-lg mx-auto bg-amber-200 shadow-md rounded-lg">
            <h1 className="text-3xl font-bold mb-4 mt-2">Final Your Submission</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
                <div className="flex flex-col">
                    <label htmlFor="bestTime" className="text-sm font-semibold mb-2">
                        What would be the best time?
                    </label>
                    <select
                        {...register('bestTime', { required: 'This field is required' })}
                        id="bestTime"
                        name="bestTime"
                        className="select select-primary w-full lg:w-1/2 md:w-3/4"
                    >
                        <option value="">Select an option</option>
                        <option value="morning">Morning</option>
                        <option value="evening">Evening</option>
                    </select>
                    {errors.bestTime && (
                        <span className="text-red-500">{errors.bestTime.message}</span>
                    )}
                </div>
                <div className="flex flex-col">
                    <label htmlFor="howDidYouHear" className="text-sm font-semibold mb-2">
                        How did you hear about us?
                    </label>
                    <select
                        {...register('howDidYouHear', { required: 'This field is required' })}
                        id="howDidYouHear"
                        name="howDidYouHear"
                        className="select select-primary w-full lg:w-1/2 md:w-3/4"
                    >
                        <option value="">Select an option</option>
                        <option value="x">X</option>
                        <option value="y">Y</option>
                        <option value="z">Z</option>
                    </select>
                    {errors.howDidYouHear && (
                        <span className="text-red-500">{errors.howDidYouHear.message}</span>
                    )}
                </div>
                {/* ///////////////// */}

                <div className="flex flex-col">
                    <label htmlFor="attachment" className="text-sm font-semibold mb-2">
                        Upload any attachment (jpg, pdf, jpeg, doc, docx)
                    </label>
                    <input
                        {...register('attachment', { required: 'This field is required' })}
                        type="file"
                        id="attachment"
                        name="attachment"
                    // className="input input-primary w-full"
                    />
                    {errors.attachment && (
                        <span className="text-red-500">{errors.attachment.message}</span>
                    )}
                </div>

                <div style={{ maxWidth: '700px' }}>
                    {`Bangladesh Bangladesh Bangladesh Bangladesh Bangladesh Bangladesh Bangladesh 
                    Bangladesh Bangladesh Bangladesh Bangladesh Bangladesh Bangladesh Bangladesh 
                    Bangladesh Bangladesh Bangladesh Bangladesh Bangladesh Bangladesh Bangladesh 
                    Bangladesh Bangladesh Bangladesh Bangladesh Bangladesh Bangladesh Bangladesh `}
                </div>



                <div className="flex items-center">
                    <input
                        {...register('isRobot', { required: 'This field is required' })}
                        type="checkbox"
                        id="isRobot"
                        name="isRobot"
                        className="mr-2"
                    />
                    <label htmlFor="isRobot" className="text-sm font-semibold mb-2">
                        I am not a robot
                    </label>
                    {errors.isRobot && (
                        <span className="text-red-500">{errors.isRobot.message}</span>
                    )}
                </div>

                <div className="flex justify-between">
                    <button
                        type="button"
                        className="px-4 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-600 focus:outline-none transition duration-300"
                        onClick={goToPreviousPage}
                    >
                        Back
                    </button>
                    <button
                        type="submit"
                        className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none transition duration-300"
                    >
                        Submit Your Complaint
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FinalSubmissionPage;
