
export default function Receipt(props){
    return(
        <div className='rec'>
            <h2>{props.data.person}</h2>
            <h4>Main: {props.data.order.main}</h4>
            <h4>Protein: {props.data.order.protein}</h4>
            <h4>Rice: {props.data.order.rice}</h4>
            <h4>Sauce: {props.data.order.sauce}</h4>
            <h4>Toppings: {props.data.order.toppings}</h4>
            <h4>Drink: {props.data.order.drink}</h4>
            <h4>Cost: ${props.data.order.cost}</h4>
        </div>
    )
}

