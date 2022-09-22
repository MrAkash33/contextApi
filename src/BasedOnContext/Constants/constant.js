export const api_base_url = `https://jsonplaceholder.typicode.com`

export const isFocus = (id) =>{
    return document.getElementById(id).focus();
}

export const isValidation = (isText,isText2) =>{
    if(isText.length > 6 && isText2.length > 6){
        return true
    }
}