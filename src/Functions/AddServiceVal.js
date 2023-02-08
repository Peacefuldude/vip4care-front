export const AddServiceVal = (data) => {

    const errors = [];

    if (!data.title) {
        errors.title = "لطفا نام کارت مورد نظر را وارد کنید!";
    } else {
        delete errors.title;
    }

    if (!data.description) {
        errors.description = "لطفا توضیحات مختصری ارائه دهید!";
    } else {
        delete errors.description;
    }

    return errors;

}