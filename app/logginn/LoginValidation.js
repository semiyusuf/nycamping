function Validation(values) {
    let error = {}

    const email_pattern = /^[^\s@]+@[^\s@]+.[^\s@]+$/

    //const passord_pattern = /^(?=.\d)(?=.[a-z])(?=.[A-Z])[a-zA-Z0-9]{8,}$/


    if(values.email === "") { 
        error.email = "Email skal ikke være tom!"
    }
    else if(!email_pattern.test(values.email)) {
        error.email = "Email fins ikke"
    }else { 
        error.email = ""
    }
    if(values.passord === "") {
        error.passord = "Passord skal ikke være tom"
    }/*
    else if(!passord_pattern.test(values.passord)) {
        error.passord = "Passord feil"
    }  else {
        error.passord = ""
    }  */

    return error;
}
export default Validation;