// components/YourDetailsPage.tsx

import React, { useState } from 'react';
import { TextField, Text, Stack, IDropdownOption, ComboBox, ChoiceGroup, IChoiceGroup, IChoiceGroupOption } from '@fluentui/react';
import './YourDetailsPage.css'; // Import your CSS file

const YourDetailsPage: React.FC = () => {

  const [formData, setFormData] = useState({
    title: '',
    firstName: '',
    lastName: '',
    postalAddress: '',
    address: '',
    suburb: '',
    postalCode: '',
    state: '',
    country: '',
    preferredContactNumber: '',
    phone: '',
    mobile: '',
  })

  const titleOptions: IDropdownOption[] = [
    { key: 'mrs', text: 'Mrs.' },
    { key: 'mr', text: 'Mr.' },
  ]

  // drop-down function for title
  const handleDropdownChange = (option: IDropdownOption | undefined): void => {
    if (option) {
      setFormData((prevData) => {
        console.log('Dropdown Change:', { ...prevData, title: option.text });
        return { ...prevData, title: option.text };
      });
    }
  };

  // input box field change
  const handleTextFieldChange = (key: keyof typeof formData, value: string): void => {
    setFormData((prevData) => {
      console.log('Text Field Change:', { ...prevData, [key]: value });
      return { ...prevData, [key]: value };
    });
  };

  const handlePreferredContactNumberChange = (_ev?: React.FormEvent<HTMLElement | HTMLInputElement>, option?: IChoiceGroupOption): void => {
    if (option) {
      // setFormData((prevData) => ({ ...prevData, preferredContactNumber: option.key }));
      setFormData((prevData) => {
        console.log('Choose Number:', { ...prevData, preferredContactNumber: option.key });
        return { ...prevData, preferredContactNumber: option.key };
      })
    }
  };

  return (
    <div className="your-details-container">
      <h1>Your Details</h1>
      <p>Provide your details below:</p>

      <Stack tokens={{ childrenGap: 15 }}>

        {/* Title, First Name, Last Name */}
        <Stack horizontal tokens={{ childrenGap: 15 }}>
          <ComboBox
            label="Title"
            options={titleOptions}
            selectedKey={formData.title}
            onChange={(e, option) => handleDropdownChange(option)}
            autoComplete="on"
          />
          <TextField
            label="First Name"
            onChange={(e, value) => handleTextFieldChange('firstName', value || '')}
            styles={{ root: { width: '40%' } }}
          />
          <TextField
            label="Last Name"
            onChange={(e, value) => handleTextFieldChange('lastName', value || '')}
            styles={{ root: { width: '40%' } }}
          />
        </Stack>

        {/* Postal Address */}
        <TextField
          label="Postal Address"
          onChange={(e, value) => handleTextFieldChange('postalAddress', value || '')}
        />

        {/* Address */}
        <TextField
          label="Address"
          onChange={(e, value) => handleTextFieldChange('address', value || '')}
        />

        {/* Suburb and Postal Code */}
        <Stack horizontal tokens={{ childrenGap: 15 }}>
          <TextField
            label="Suburb"
            onChange={(e, value) => handleTextFieldChange('suburb', value || '')}
          />
          <TextField
            label="Postal Code"
            onChange={(e, value) => handleTextFieldChange('postalCode', value || '')}
          />
        </Stack>

        {/* State and Country */}
        <Stack horizontal tokens={{ childrenGap: 15 }}>
          <TextField
            label="State"
            onChange={(e, value) => handleTextFieldChange('state', value || '')}
          />
          <TextField
            label="Country"
            onChange={(e, value) => handleTextFieldChange('country', value || '')}
          />
        </Stack>



        {/* Preferred Contact Number, Phone, and Mobile */}
        <Stack tokens={{ childrenGap: 15 }}>
          <Text variant="medium" styles={{ root: { color: 'black', marginBottom: '8px' } }}>
            Preferred Contact Number
          </Text>
          <Stack horizontal tokens={{ childrenGap: 15 }}>

            <ChoiceGroup
              options={[
                { key: 'phone', text: 'Phone' },
                { key: 'mobile', text: 'Mobile' },
              ]}
              onChange={handlePreferredContactNumberChange}
              // styles={{ root: { width: '35%' } }} 
              className="ms-TextField choiceGroup"
            />

            <TextField
              label="Phone"
              onChange={(e, value) => handleTextFieldChange('phone', value || '')}
              // styles={{ root: { width: '40%' } }}
              className="ms-TextField phone"
            />

            <TextField
              label="Mobile"
              onChange={(e, value) => handleTextFieldChange('mobile', value || '')}
              // styles={{ root: { width: '40%' } }}
              className="ms-TextField mobile"
            />
          </Stack>
        </Stack>

      </Stack>
    </div>
  );
};

export default YourDetailsPage;
