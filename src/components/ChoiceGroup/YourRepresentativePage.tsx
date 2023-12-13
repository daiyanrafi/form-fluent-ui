import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

interface FormData {
    title: string;
    firstName: string;
    lastName: string;
    address: string;
    suburb: string;
    postcode: string;
    state: string;
    country: string;
    landline?: string; // Make the landline field optional
    mobile: string;
    email: string;
}

type FieldName = keyof FormData;

const AuthorizationForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<FormData>(); // Specify the form data type
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log('Form data submitted:', data);
        const formData = {
            title: data.title,
            firstName: data.firstName,
            lastName: data.lastName,
            address: data.address,
            suburb: data.suburb,
            postcode: data.postcode,
            state: data.state,
            country: data.country,
            landline: data.landline || '', // Provide a default value or handle
            mobile: data.mobile,
            email: data.email,
        };
        console.log('gg the data', data);
        console.log('Processed form data:', formData);
        // Save user data to local storage and redirect
        sessionStorage.setItem('authorizationFormData', JSON.stringify(data));
        console.log('Form data saved to local storage.');
        // window.location.href = '/next-page';
        navigate('/incident', { state: { formData: data } });
    };

    const goToPreviousPage = () => {
        navigate('/YourDetails');
    };
    console.log('Rendering AuthorizationForm component.');

    // Load form data from sessionStorage on component mount
    useEffect(() => {
        const storedFormData = sessionStorage.getItem('authorizationFormData');
        if (storedFormData) {
            const parsedData = JSON.parse(storedFormData);
            // Set form data using setValue for each field
            const keys = Object.keys(parsedData) as Array<FieldName>;

            keys.forEach((key) => {
                setValue(key, parsedData[key]);
            });
        }
    }, [setValue]); // Include setValue as a dependency

    return (
        // <div className="p-8 max-w-lg mx-auto bg-white shadow-md rounded-md">
        <div className="p-8 max-w-lg mx-auto bg-amber-200 shadow-md rounded-lg h-[900px] overflow-auto">
            <h1 className="text-3xl font-bold mb-4">Your Representative</h1>
            <p className="mb-6 text-gray-600 text-left font-semibold">
                If you are submitting this complaint on behalf of another person/supplier/organisation,
                please complete the Authority to Act form and have it ready to attach.
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
                <div className="flex items-center gap-2">
                    <label htmlFor="title" className="text-sm font-semibold mb-2">Title</label>
                    <select
                        {...register('title', { required: 'Title is required' })}
                        id="title"
                        name="title"
                        className="select select-primary w-full"
                    >
                        <option value="" className="text-sm font-semibold mb-2">Select title</option>
                        <option value="Mr">Mr.</option>
                        <option value="Mrs">Mrs.</option>
                        <option value="Ms">Ms.</option>
                    </select>
                    {errors.title && (
                        <span className="text-red-500">{errors.title.message}</span>
                    )}
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col">
                        <label htmlFor="firstName" className="text-sm font-semibold mb-2">First Name</label>
                        <input
                            {...register('firstName', { required: 'First name is required' })}
                            type="text"
                            id="firstName"
                            name="firstName"
                            className="input input-primary w-full"
                        />
                        {errors.firstName && (
                            <span className="text-red-500">{errors.firstName.message}</span>
                        )}
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="lastName" className="text-sm font-semibold mb-2">Last Name</label>
                        <input
                            {...register('lastName', { required: 'Last name is required' })}
                            type="text"
                            id="lastName"
                            name="lastName"
                            className="input input-primary w-full"
                        />
                        {errors.lastName && (
                            <span className="text-red-500">{errors.lastName.message}</span>
                        )}
                    </div>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="address" className="text-sm font-semibold mb-2">Postal Address</label>
                    <input
                        {...register('address', { required: 'Postal address is required' })}
                        type="text"
                        id="address"
                        name="address"
                        className="input input-primary w-full"
                    />
                    {errors.address && (
                        <span className="text-red-500">{errors.address.message}</span>
                    )}
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col">
                        <label htmlFor="suburb" className="text-sm font-semibold mb-2">Suburb</label>
                        <input
                            {...register('suburb', { required: 'Suburb is required' })}
                            type="text"
                            id="suburb"
                            name="suburb"
                            className="input input-primary w-full"
                        />
                        {errors.suburb && (
                            <span className="text-red-500">{errors.suburb.message}</span>
                        )}
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="postcode" className="text-sm font-semibold mb-2">Postcode</label>
                        <input
                            {...register('postcode', { required: 'Postcode is required' })}
                            type="text"
                            id="postcode"
                            name="postcode"
                            className="input input-primary w-full"
                        />
                        {errors.postcode && (
                            <span className="text-red-500">{errors.postcode.message}</span>
                        )}
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col">
                        <label htmlFor="state">State</label>
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
                    <div className="flex flex-col">
                        <label htmlFor="country">Country</label>
                        <input
                            {...register('country', { required: 'Country is required' })}
                            type="text"
                            id="country"
                            name="country"
                            className="input input-primary w-full"
                        />
                        {errors.country && (
                            <span className="text-red-500">{errors.country.message}</span>
                        )}
                    </div>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="landline" className="text-sm font-semibold mb-2">Landline Number</label>
                    <input
                        {...register('landline')}
                        type="tel"
                        id="landline"
                        name="landline"
                        className="input input-primary w-full"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="mobile" className="text-sm font-semibold mb-2">Mobile Number</label>
                    <input
                        {...register('mobile', { required: 'Mobile number is required' })}
                        type="tel"
                        id="mobile"
                        name="mobile"
                        className="input input-primary w-full"
                    />
                    {errors.mobile && (
                        <span className="text-red-500">{errors.mobile.message}</span>
                    )}
                </div>
                <div className="flex flex-col">
                    <label htmlFor="email" className="text-sm font-semibold mb-2">Email Address</label>
                    <input
                        {...register('email', { required: 'Email address is required' })}
                        type="email"
                        id="email"
                        name="email"
                        className="input input-primary w-full"
                    />
                    {errors.email && (
                        <span className="text-red-500">{errors.email.message}</span>
                    )}
                </div>
                <p className="mb-4 text-sm font-semibold" >
                    If you are acting on behalf of another person, you are required to provide a signed authority to act form. Alternatively, you can also post the Autherity to Act form to us on GPO Box 2947. Adelaide SA 5001.
                </p>

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
                        onClick={handleSubmit(onSubmit)}
                    >
                        Next
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AuthorizationForm;

