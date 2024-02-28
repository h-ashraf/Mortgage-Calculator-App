import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InputField from '../components/InputField';
import Button from '../components/Button';

const CalculatorScreen = () => {
    const [loanAmount, setLoanAmount] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [repaymentPeriod, setRepaymentPeriod] = useState('');
    const [mortgagePayment, setMortgagePayment] = useState(null);

    // Function to handle calculation logic
    const calculateMortgage = () => {
        // Convert interest rate from percentage to decimal
        const monthlyInterestRate = parseFloat(interestRate) / 100 / 12;

        // Convert repayment period from years to months
        const totalPayments = parseFloat(repaymentPeriod) * 12;

        // Check if any of the inputs are empty or not a number
        if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(repaymentPeriod)) {
        // Handle invalid input
        alert('Please enter valid numbers for all fields');
        return;
        }

        // Calculate mortgage payment using formula: M = P[r(1+r)^n]/[(1+r)^n - 1]
        const mortgagePayment = (parseFloat(loanAmount) * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -totalPayments));

        // Round the result to two decimal places
        const roundedPayment = Math.round(mortgagePayment * 100) / 100;

        // Update state with calculated mortgage payment
        setMortgagePayment(roundedPayment);
    };

    return (
        <View style={styles.container}>
        <Text style={styles.title}>Mortgage Calculator</Text>
        <InputField
            placeholder="Loan Amount"
            value={loanAmount}
            onChangeText={setLoanAmount}
            keyboardType="numeric"
        />
        <InputField
            placeholder="Interest Rate (%)"
            value={interestRate}
            onChangeText={setInterestRate}
            keyboardType="numeric"
        />
        <InputField
            placeholder="Repayment Period (years)"
            value={repaymentPeriod}
            onChangeText={setRepaymentPeriod}
            keyboardType="numeric"
        />
        <Button title="Calculate" onPress={calculateMortgage} />
        {mortgagePayment !== null && (
            <Text style={styles.result}>Monthly Payment: ${mortgagePayment}</Text>
        )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    result: {
        marginTop: 20,
        fontSize: 16,
    },
});

export default CalculatorScreen;