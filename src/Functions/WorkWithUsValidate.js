export const WorkWithUsValidate = (data, type) => {

    const errors = [];

    if (type === "workwithus") {

        if (!data.first_name.trim()) {
            errors.first_name = "نام خود را وارد کنید!";
        } else {
            delete errors.first_name;
        }

        if (!data.last_name.trim()) {
            errors.last_name = "نام خانوادگی خود را وارد کنید!";
        } else {
            delete errors.last_name;
        }

        if (!data.email.trim()) {
            errors.email = "ایمیل خود را وارد کنید!";
        } else {
            delete errors.email;
        }

        if (!data.phone) {
            errors.phone = "تلفن همراه خود را وارد کنید!";
        } else {
            delete errors.phone;
        }

    }


    return errors;

}