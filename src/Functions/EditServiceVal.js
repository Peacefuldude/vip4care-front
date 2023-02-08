export const EditServiceVal = (data) => {

    const errors = [];

    if (!data.title) {
        errors.title = "لطفا نام جدید را وارد کنید!";
    } else {
        delete errors.title;
    }

    return errors;

}