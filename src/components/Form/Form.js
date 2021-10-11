import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {saveToStore, saveToLocalStorage, getLocalStorage,} from '../../modules/localStorage/localStorage.actions';
import {getCurrentRates } from '../../modules/currencyApi/currencyApi.actions';
import {fields, init} from '../../data/data';
import CurrencyApi from '../../modules/currencyApi';
import {v4 as uuid} from 'uuid';

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
        if (name === 'purchaseDate') {
            const api = new CurrencyApi();
            api.getExchangeRate(formData.currency, formData.purchaseDate)
                .then((resp) => setFormData({
                    ...formData,
                    purchasePrice: resp.toFixed(3),
                }));
        }
    };

    const style = {
        color: "red"
    }

    const renderError = () => <p style={style}>{error}</p>;

    const renderFormFields = () => fields.map(({ name, type, placeholder }) => (
        <label key={name} htmlFor={name}>
            <input name={name} id={name} type={type} placeholder={placeholder} value={formData[name]} onChange={(e) => onInputChange(e.target)}/>
        </label>
    ));

    return (
        <form onSubmit={(e) => handleSubmit(e)} onBlur={(e) => handleBlur(e.target)}>
            {renderFormFields()}
            {error ? renderError() : null}
            <button type="submit" block>Add</button>
        </form>
    );
};

export default FormContainer;