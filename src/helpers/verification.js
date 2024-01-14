// Module for Password Verification

function isEqual(a, b, errors) {
    if (a === b) {
        return true;
    } else {
        errors.push({error:"Passwords are not equal", id:"0"});
        return false;
    }
}

function atLeastOneNumber(a, errors) {
    var pattern = /[0-9]/g;
    if(a.match(pattern)) {
        return true;
    } else {
        errors.push({error:"Password must contain at least one number", id:"1"});
        return false;
    }
}

function atLeastOneUpperCase(a, errors) {
    var pattern = /[A-Z]/g;
    if (a.match(pattern)) {
        return true;
    } else {
        errors.push({error: "Password must contain at least one uppercase letter", id:"2"});
        return false;
    }
}

function atLeastSeven(a, errors) {
    if (a.length >= 7) {
        return true;
    } else {
        errors.push({error: "Password must have 7 or more characters", id:"3"});
        return false;
    }
}

function passValidation(a, b) {
    var errors = [];
    isEqual(a, b, errors);
    atLeastOneNumber(a, errors);
    atLeastOneUpperCase(a, errors);
    atLeastSeven(a, errors);
    return errors;
}

export { passValidation };