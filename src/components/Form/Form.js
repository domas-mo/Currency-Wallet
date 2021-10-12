import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {saveToStore, saveToLocalStorage, getLocalStorage,} from '../../modules/localStorage/localStorage.actions';
import {getCurrentRates } from '../../modules/currencyApi/currencyApi.actions';
import {fields, init} from '../../data/data';
import CurrencyApi from '../../modules/currencyApi';
import {v4 as uuid} from 'uuid';

import StyledInput from '../../styled/Input.styled';
import StyledButton from '../../styled/Button.styled';
import StyledParagraph from '../../styled/Parahraph.styled';

const FormContainer = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState(init);
    const [error, setError] = useState('');

    const { rates } = useSelector((state) => state.currencyAPI);

    useEffect(() => {
        dispatch(getCurrentRates());
        dispatch(getLocalStorage());
    }, []);

    const clearForm = () => {
        setFormData(init);
        setError();
    };
    const isCurrencyAvailable = () => rates[formData.currency];

    const validate = () => {
        const fieldsNotEmpty = () => Object.values(formData).filter((v) => v !== '').length === 5;
        return isCurrencyAvailable() && fieldsNotEmpty();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            dispatch(saveToStore(formData));
            dispatch(saveToLocalStorage(formData));
            clearForm();
        } else {
            setError('Complete the field!');
        }
    };
    const onInputChange = ({ name, value }) => {
        setFormData({
            ...formData,
            [name]: value,
            key: uuid(),
        });
    };

    const handleBlur = ({ name }) => {
        if (name === 'buyDate') {
            const api = new CurrencyApi();
            api.getExchangeRate(formData.currency, formData.buyDate)
                .then((resp) => setFormData({
                    ...formData,
                }));
        }
    };

    const renderError = () => <StyledParagraph>{error}</StyledParagraph>;

    const renderFormFields = () => fields.map(({ name, type, placeholder }) => (
        <label key={name} htmlFor={name}>
            <StyledInput name={name} id={name} type={type} placeholder={placeholder} value={formData[name]} onChange={(e) => onInputChange(e.target)}/>
        </label>
    ));

    return (
        <form onSubmit={(e) => handleSubmit(e)} onBlur={(e) => handleBlur(e.target)}>
            {renderFormFields()}
            <StyledButton type="submit" block>Add</StyledButton>
            {error ? renderError() : null}
        </form>
    );
};

export default FormContainer;