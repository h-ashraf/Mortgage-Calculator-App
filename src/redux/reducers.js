import { combineReducers } from 'redux';
import { SET_LOAN_AMOUNT, SET_INTEREST_RATE, SET_REPAYMENT_PERIOD } from './actions';

// Initial state
const initialState = {
    loanAmount: 0,
    interestRate: 0,
    repaymentPeriod: 0,
};

// Reducer function to update state based on actions
const mortgageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOAN_AMOUNT:
        return {
            ...state,
            loanAmount: action.payload,
        };
        case SET_INTEREST_RATE:
        return {
            ...state,
            interestRate: action.payload,
        };
        case SET_REPAYMENT_PERIOD:
        return {
            ...state,
            repaymentPeriod: action.payload,
        };
        default:
        return state;
    }
};

// Combine reducers
const rootReducer = combineReducers({
  mortgage: mortgageReducer,
});

export default rootReducer;