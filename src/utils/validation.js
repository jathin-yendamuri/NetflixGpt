export const validation = (email , password)=>
{
    const emailvalid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const pwdvalid = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password);
    // const nmvalid = /^[A-Za-z][A-Za-z0-9_]{7,29}$/.test(name);

    if(!emailvalid && !pwdvalid)return "email and password Not valid...!";
    if(!pwdvalid) return "password Not valid...!";
    if(!emailvalid) return "email Not valid..!";

    return null;
    
}