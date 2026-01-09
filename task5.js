export function rubricPassFail(calif) {
    
    
    if(calif>=5)
    {
        return "PASS";
    }
    else
    {
        return "FAIL";
    }
}

console.log(rubricPassFail(4));