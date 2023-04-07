export interface productProps{
    id:number;
    title:string;
    price:number;
    image:string;
    description:string;
    category:string;
    rating:{
        rate:number;
        count:number;
    }
}

export interface dataProps{
    category:string,
    setCategory:React.Dispatch<React.SetStateAction<string>>;
}