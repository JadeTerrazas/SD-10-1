import {ageCalculator} from "./task3.js";

export class FriendAge {
    name;
    year;
    month;
    day;
    constructor(name,year,month,day)
    {
        this.name = name;
        this.year = year;
        this.month = month;
        this.day = day;
    }

    set setName(name)
    {
        this.name = name;
    }
    get getName()
    {
        return this.name;
    }
    set setYear(year)
    {
        this.year = year;
    }
    get getYear()
    {
        return this.year;
    }
    set setMonth(month)
    {
        this.month = month;
    }
    get getMonth()
    {
        return this.month;
    }
    set setDay(day)
    {
        this.day = day;
    }
    get getDay()
    {
        return this.day;
    }


    returnAge()
  {
    const age = ageCalculator(this.year,this.month,this.day);
    return `${this.getName} tiene ${age} años hoy!`
  }

}
const friend = new FriendAge("Juan",2000,12,25);
console.log(friend.returnAge())