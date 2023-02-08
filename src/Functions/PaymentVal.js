export const PaymentVal = (data) => {

    const errors = [];

    if (!data.amount) {
        errors.amount = "مبلغ مورد نظر را وارد کنید!";
    } else {
        delete errors.amount;
    }

    return errors;

}