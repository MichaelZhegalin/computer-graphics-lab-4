export const isNumberCheck = (string) => {
    if(string === '0'){
        return true
    }
    return !!Number(string)
}