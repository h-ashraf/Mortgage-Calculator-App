// Function to calculate mortgage payments
const calculateMortgage = (loanAmount, interestRate, repaymentPeriod) => {
    // Convert interest rate from percentage to decimal
    const monthlyInterestRate = interestRate / 100 / 12;
    
    // Convert repayment period from years to months
    const totalPayments = repaymentPeriod * 12;

    // Calculate mortgage payment using formula: M = P[r(1+r)^n]/[(1+r)^n - 1]
    const mortgagePayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -totalPayments));

    // Round the result to two decimal places
    const roundedPayment = Math.round(mortgagePayment * 100) / 100;
    
    return roundedPayment;
};

export default calculateMortgage;  