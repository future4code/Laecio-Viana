

const isOneEdit = (str1, str2) =>{
    if(str1.length <= str2.length - 2 || str1.length >= str2.length + 2){
        return false
    }

    if (str1.length > str2.length) return str1.includes(str2)
    if (str2.length > str1.length) return str2.includes(str1)

    let countChars = 0

    for (let i = 0; i < str1.length; i++){
        if(str1[i] !== str2[i]){
            countChars++
        }
    }
    
    return countChars === 1    
}

console.log(isOneEdit('bananak','banana'))