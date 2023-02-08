export const Validate = (data, type) => {

    const errors = [];

    if (type === "emergency_nurse") {
        
        if (!data.phoneNumber) {
            errors.phoneNumber = "شماره تلفن خود را وارد کنید!"
        } else {
            delete errors.phoneNumber;
        }
        
        if (!data.description.trim()) {
            errors.description = "لطفا توضیحات مختصری ارائه دهید!";
        } else {
            delete errors.description;
        }

    }

    if (type === "login") {

        if (!data.mobile.trim()) {
            errors.mobile = "تلفن همراه خود را وارد کنید!";
        } else {
            delete errors.mobile;
        }

        if (!data.password) {
            errors.password = "رمز عبور خود را وارد کنید!";
        } else if (data.password.length < 6) {
            errors.password = "رمز عبور شما حداقل شش حرف دارد!";
        } else {
            delete errors.password;
        }
        
    }

    if (type === "forgetpass") {
        
        if (!data.mobile) {
            errors.mobile = "شماره تلفن خود را وارد کنید!"
        } else {
            delete errors.mobile;
        }

    }

    if (type === "signup") {

        // Name is not requiered due to request.
        // if (!data.name.trim()) {
        //     errors.name = "نام خود را وارد کنید!";
        // } else {
        //     delete errors.name;
        // }

        if (!data.username.trim()) {
            errors.username = "نام کاربری خود را وارد کنید!";
        } else {
            delete errors.username;
        }

        if (!data.mobile) {
            errors.mobile = "تلفن همراه خود را وارد کنید!";
        } else {
            delete errors.mobile;
        }

        if (!data.email.trim()) {
            errors.email = "ایمیل خود را وارد کنید!";
        } else {
            delete errors.email;
        }

        if (!data.password) {
            errors.password = "!رمز عبور خود را وارد کنید";
        } else if (data.password.length < 6) {
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