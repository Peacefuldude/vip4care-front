const serviceNameWrap = (description) => {
    const splitedName = description.split(" ");
    const newName = `${splitedName[0]} ${splitedName[1]}
                    ${splitedName[2]} ${splitedName[3]}
                    `;
    return newName;
}

export { serviceNameWrap };