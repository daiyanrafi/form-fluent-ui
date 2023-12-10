import React, { useState } from 'react';
import { ChoiceGroup, IChoiceGroupOption, DefaultButton } from '@fluentui/react';
import { useNavigate } from 'react-router-dom';
import './ChoiceGroupPage.css';

const MyChoiceGroup: React.FC = () => {
    const [selectedOption1, setSelectedOption1] = useState<string | undefined>('');
    const [selectedOption2, setSelectedOption2] = useState<string | undefined>('');
    const [showWarning, setShowWarning] = useState(false);
    const [showOption2, setShowOption2] = useState(false);
    const navigate = useNavigate();

    const options1: IChoiceGroupOption[] = [
        { key: 'yes1', text: 'Yes', name: 'group1' },
        { key: 'no1', text: 'No', name: 'group1' },
    ];

    const options2: IChoiceGroupOption[] = [
        { key: 'yes2', text: 'Yes', name: 'group2' },
        { key: 'no2', text: 'No', name: 'group2' },
    ];

    const onChange1 = (_ev?: React.FormEvent<HTMLElement | HTMLInputElement>, option?: IChoiceGroupOption): void => {
        if (option) {
            setSelectedOption1(option.key);

            setShowWarning(false);
            setSelectedOption2(undefined);
            setShowOption2(false);

            if (option.key === 'yes1') {
                setShowWarning(true);
            } else {
                setShowOption2(true);
            }
        }
    };

    const onChange2 = (_ev?: React.FormEvent<HTMLElement | HTMLInputElement>, option?: IChoiceGroupOption): void => {
        if (option) {
            setSelectedOption2(option.key);

            setShowWarning(false);

            if (option.key === 'yes2') {
            }
        }
    };

    const handleAddButtonClick = (): void => {
        console.log('Add button clicked');
        navigate('/yourDetails');
    };

    return (
        <div className="choice-container">
            <div className="title">Questionnarie:</div>
            <ChoiceGroup
                className="choice-group"
                selectedKey={selectedOption1}
                options={options1}
                onChange={onChange1}
                label="Are you without electricity, gas or water?"
                required
            />
            {showWarning && <div className="warning">Please contact with your foreman +376423926719</div>}
            {showOption2 && (
                <>
                    <ChoiceGroup
                        className="choice-group"
                        selectedKey={selectedOption2}
                        options={options2}
                        onChange={onChange2}
                        label="Have you contacted your provider to try to resolve your complaint?"
                        required
                    />
                    {selectedOption2 === 'no2' && <div className="warning">Please contact with your foreman +00393946334</div>}
                    {selectedOption2 === 'yes2' && (
                        <DefaultButton className="add-button" onClick={handleAddButtonClick} text="Add" />
                    )}
                </>
            )}
        </div>
    );
};

export default MyChoiceGroup;
