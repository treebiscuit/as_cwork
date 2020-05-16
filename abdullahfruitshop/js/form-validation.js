function validateName(inputText)
{
    /* name check */
    /* cannot contain numbers but can contain charcters like . or - */
    /* like Mr.Foo and Mrs.Foo-Bar are valid but not R2D2 or Mr. Mc#&"£4!" */
    /* remove whitespace */
    var str = inputText.replace(/\s/g, '');
    console.log( str );
    if( str.length > 100 ){
        return false;
    }
    if( str.match(/\d/) != null ){
        console.log("Name contains digits");
        return false;
    }
    if( str.match(/[$%{}\+\*\&\!\"£\/@\(\)\(\]#/]/g) != null ){
        console.log("Name contains unallowed punctuation");
        return false;
    }
    return true;
}

function validatePhoneNumber(inputText)
{
    /* basic phone number check */
    /* two types - 0XXXX XXXXXX 11 digits starts with 0 */
    /* +XX XXXX XXXXXX 12 digits starts with + */
    /* remove whitespace */
    var str = inputText.replace(/\s/g, '');
    console.log( str );
    if( str.charAt(0) == '0'){
        if( str.length != 11 ){
            console.log("Number is wrong length");
            return false;
        }
        if( str.match(/^\d+$/) == null ){
            console.log("Number is not all digits");
            return false;
        }
    }
    else if( str.charAt(0) == '+'){
        var newStr = str.substr(1);
        if( newStr.length != 12 ){
            console.log("Number is wrong length");
            return false;
        }
        if( newStr.match(/^\d+$/) == null ){
            console.log("Number is not all digits");
            return false;
        }
    }
    else {
        console.log("Number doesnt start with 0 or +");
        return false;
    }
    return true;
}

function validateEmail(inputText){
    /* reg ex from w3resource.com */
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if( inputText.match(mailformat) == null){
        console.log("Email has an invalid format");
        return false;
    }
    return true;
}

function validateComment(inputText){
    /* check that a comment has been written */
    /* check that the comment 
    /* remove whitespace */
    var str = inputText.replace(/\s/g, '');
    /* check that the comment is longer than just hello */
    if( inputText.length <  5 ) {
        console.log("comment is empty or too short");
        return false;
    }
    return true;
}

/* returns true if all fields are ok, false otherwise */
function validateForm(inputText)
{
    /* First check that all fields have been filled */
    if( inputText.name.value == "") {
        alert("Please provide a name");
        inputText.name.focus();
        return false;
    }
    if( inputText.phonenumber.value == "") {
        alert("Please provide a telephone number so we can contact you");
        inputText.phonenumber.focus();
        return false;
    }    
    if( inputText.email.value == "") {
        alert("Please provide an email so we can contact you");
        inputText.email.focus();
        return false;
    }
    if( inputText.comments.value == "") {
        alert("Please provide an enquiry");
        inputText.comments.focus();
        return false;
    }
    /* Now check all the fields have valid values */
    /* name */
    if( !validateName(inputText.name.value)){
        alert("Please use a valid name");
        inputText.name.focus();
        return false;
    }
    /* phone number */
    if( !validatePhoneNumber(inputText.phonenumber.value)){
        alert("Please use a valid phone number");
        inputText.phonenumber.focus();
        return false;
    }
    /* email */
    if( !validateEmail(inputText.email.value)){
        alert("Please use a valid email address");
        inputText.email.focus();
        return false;
    }
    /* text */
    if( !validateComment(inputText.comments.value)){
        alert("Please provide a comment");
        inputText.comments.focus();
        return false;
    }
    return true;
}