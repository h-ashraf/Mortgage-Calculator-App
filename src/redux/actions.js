// Define action types
export const SET_LOAN_AMOUNT = 'SET_LOAN_AMOUNT';
export const SET_INTEREST_RATE = 'SET_INTEREST_RATE';
export const SET_REPAYMENT_PERIOD = 'SET_REPAYMENT_PERIOD';

// Action creators
export const setLoanAmount = (amount) => ({
    type: SET_LOAN_AMOUNT,
    payload: amount,
});

export const setInterestRate = (rate) => ({
    type: SET_INTEREST_RATE,
    payload: rate,
});

export const setRepaymentPeriod = (period) => ({
    type: SET_REPAYMENT_PERIOD,
    payload: period,
});