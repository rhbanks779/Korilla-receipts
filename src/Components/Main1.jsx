import Receipt from "./Receipt";
import receipt1 from "./receiptData";


export default function Main1(){
    
    return(
        <div>
            {receipt1.map((data, index)=> {
                return <Receipt data={data} key={index} />
            
            })}
        </div>
    )
}

//1 of many poor attempts to get conditional rendering to work
/* <div> 
{receipt1.map((data, index)=> {
    let condition = data.paid
    condition ?  {display: none} : 'not paid';
    return <Receipt data={data} key={index} />

})}
</div> */