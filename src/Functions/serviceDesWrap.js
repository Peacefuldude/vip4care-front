const serviceDesWrap = (description) => {
    const splitedDes = description.split(" ");
    const newDes = `${splitedDes[0]} ${splitedDes[1]}
                    ${splitedDes[2]} ${splitedDes[3]}
                    ${splitedDes[4]} ${splitedDes[5]}
                    ${splitedDes[6]} ${splitedDes[7]}
                    ${splitedDes[8]} ${splitedDes[9]}
                    ${splitedDes[10]} ${splitedDes[11]}
                    ${splitedDes[12]} ${splitedDes[13]}
                    ${splitedDes[14]} ${splitedDes[15]}
                    ${splitedDes[16]} ${splitedDes[17]}
                    ${splitedDes[18]} ${splitedDes[19]}
                    ${splitedDes[20]} ${splitedDes[21]}
                    ${splitedDes[22]} ${splitedDes[23]}
                    ${splitedDes[24]} ${splitedDes[25]}
                    ${splitedDes[26]} ${splitedDes[27]}
                    ${splitedDes[28]} ${splitedDes[29]}
                    ${splitedDes[30]}
                    `;
    return newDes;
}

export { serviceDesWrap };