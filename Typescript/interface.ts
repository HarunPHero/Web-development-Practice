type Person2 = {//declare type....(custom type)
    codeEditor:string,
    StartingPro:number,
    IsProgramming:boolean;
}

interface Person1 extends Person2 {//declare type....(custom type)
    name:string,
    age:number,
    IsBestFreind:boolean;
}
const MamunBestFreind:Person1={//error reason: we do not give person2 details in his object for exteds
    name:'Murshedul',
    age:13,
    IsBestFreind:true
}