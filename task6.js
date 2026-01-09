export function rubricExcellent(calif) {

    if(calif>=5)
    {
        if(calif>8)
        {
            return "EXCELLENT!"
        }
        return "PASS";                
    }
    else
    {
        return "FAIL";
    }
}

console.log(rubricExcellent(9));