export const EditAccountValidate = (data, type) => {

    const errors = [];

    if (type === "editaccount") {

        if (data.password.length < 6) {
            errors.password = "!رمز عبور شما باید حداقل شش حرف باشد";
        } else {
            delete errors.password;
        }

        if (!data.confirmPassword) {
            errors.confirmPassword = "!رمز عبور خود را تایید کنید"
        } else if (data.confirmPassword !== data.password) {
            errors.confirmPassword = "!رمز های عبور با هم تطابق ندارند"
        } else {
            delete errors.confirmPassword;
        }

    }


    return errors;

}