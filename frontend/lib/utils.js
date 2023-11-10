export const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const isPhoneNumberValid = (phoneNumber) => {
    // const phoneRegex = /^\+?[0-9\-()\s]+$/;
    const phoneRegex = /^\+?[0-9\-()]+$/;
    return phoneRegex.test(phoneNumber);
};