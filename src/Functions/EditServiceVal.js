export const EditServiceVal = (data) => {

    const errors = [];

    if (!data.title) {
        errors.title = "لطفا نام جدید را وارد کنید!";
    } else {
        delete errors.title;
    }
    if (!data.model) {
        errors.model = "لطفا مدل جدید را وارد کنید!";
    } else {
        delete errors.model;
    }
    if (!data.guarantee) {
        errors.guarantee = "لطفا مدت گارانتی جدید را وارد کنید!";
    } else {
        delete errors.guarantee;
    }
    if (!data.price) {
        errors.price = "لطفا قیمت جدید را وارد کنید!";
    } else {
        delete errors.price;
    }
    if (!data.quantity) {
        errors.quantity = "لطفا تعداد مدنظر جدید را وارد کنید!";
    } else {
        delete errors.quantity;
    }

    return errors;

}