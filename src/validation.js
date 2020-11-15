const usernameValidation = (username) => {

    if(username.length === 0){
        return 'Username field is required'
    }else if(!username.trim().length){
        return 'Username field is required'
    }

    return 'valid'
}


const phoneValidation = (phone) => {
    if(phone.length === 0){
        return 'Phone number field is required'
    }
    else if(/^-?[\d.]+(?:e-?\d+)?$/.test(phone) === false){
        return 'Phone number must contain only numeric characters'
    }
    else if(phone.length !== 9){
        return 'Phone number lenght must be 9'
    }

    return 'valid'
}

const mailValidation = (mail) => {
    if(mail.length === 0){
        return 'Mail field is required'
    }else if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)){
        return 'Invalid email address'
    }

    return 'valid'
}

export default {usernameValidation ,phoneValidation, mailValidation}