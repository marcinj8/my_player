import { useReducer } from 'react';

const checkIsElementValid = val => {
    return val.length > 3;
};

const checkIsFormValid = (state, formElement, isElementValid) => {
    let isFormValid = true;
    const inputsValidationArr = Object.keys(state).map(element => {

        if (element === 'isFormValid') {
            return true;
        };
        if (element === formElement) {
            return isElementValid;
        };
        return state[element].isValid;
    });

    for (let value of inputsValidationArr) {
        isFormValid = isFormValid && value;
    }

    return isFormValid;
}

const inputChange = (state, action) => {
    const isElementValidUpdated = checkIsElementValid(action.val);
    const isFormValidUpdated = checkIsFormValid(state, action.formElement, isElementValidUpdated);

    return {
        ...state,
        [action.formElement]: {
            ...state[action.formElement],
            value: action.val,
            isValid: isElementValidUpdated
        },
        isFormValid: isFormValidUpdated
    }
}

const inputReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE': return inputChange(state, action);
        case 'TOUCH':
            return {
                ...state,
                [action.formElement]: {
                    ...state[action.formElement],
                    isTouched: true
                }
            }
        default:
            return state
    }
}

const useForm = (initialState) => {
    const [formState, dispatch] = useReducer(inputReducer, {
        ...initialState,
        isFormValid: false
    });

    const changeHandler = event => {
        dispatch({
            type: 'CHANGE',
            val: event.target.value,
            formElement: event.target.name
        })
    };

    const blurHandler = (formElement) => {
        dispatch({
            type: 'TOUCH',
            formElement
        });
    };

    return { formState, changeHandler, blurHandler }
}

export default useForm;