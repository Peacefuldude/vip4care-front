export const AddBlogVal = (data) => {

    const errors = [];

    if (!data.title) {
        errors.title = "لطفا نام بلاگ را وارد کنید!";
    } else {
        delete errors.title;
    }

    if (!data.description) {
        errors.description = "لطفا متن بلاگ را وارد کنید!";
    } else {
        delete errors.description;
    }

    return errors;

}