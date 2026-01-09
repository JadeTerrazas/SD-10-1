export function rubricPerfect(calif) {
    if(calif>=5)
    {
        if(calif>8)
            if(calif===11)
            {
                return "PERFECT!"
            }
            else
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

console.log(rubricPerfect(11));
