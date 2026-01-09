export class FriendNames 
{
  name1;
  name2;
  name3;
    constructor(name1,name2,name3) 
    {
      this.name1 = name1;
      this.name2 = name2;
      this.name3 = name3;  
    }

    set setName1(name1)
    {
        this.name1 = name1;
    }
    get getName1()
    {
        return this.name1;
    }

    set setName2(name2)
    {
        this.name2 = name2;
    }
    get getName2()
    {
        return this.name2;
    }

    set setName3(name3)
    {
        this.name3 = name3;
    }
    get getName3()
    {
        return this.name3;
    }

    dimeNames()
  {
    return `Tus amigos son ${this.getName1}, ${this.getName2} y ${this.getName3}.`
  }
  }

  const amigos = new FriendNames("Juan", "Pedro", "Pablo");
  console.log(amigos.dimeNames());