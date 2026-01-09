export function ageCalculator(año,mes,dia) 
{
    const hoy = new Date();
    const thisYear = hoy.getFullYear();
    const thisMonth = hoy.getMonth() +1;
    const thisDay = hoy.getDate();
    let age = 0;

    if((mes < thisMonth) || (mes === thisMonth && dia <= thisDay))
    {
    age = thisYear - año;
    }
    else
    {
        age = (thisYear -1) - año;
    }
    return age;
}

console.log(ageCalculator(2000,12,25));