import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TypePizza } from '../../../redux/pizzaReducer';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { TYPES_PIZZA } from '../../../redux/TypeReducer';
import { Alert, AlertTitle } from '@mui/material';

export default function HomePizzas() {
    const [alert, setAlert] = useState<boolean>(false)
    let pizzas: TypePizza[] = useSelector((state) => state.pizza.pizza)
    const dispatch = useDispatch()
    function handleAddPizza(el: TypePizza) {
        let pizzaBasket: TypePizza[] = JSON.parse(localStorage.getItem("basket")) || []

        if (!pizzaBasket.find((ell: TypePizza) => ell.id == el.id))  {
            pizzaBasket.push(el)
            localStorage.setItem("basket", JSON.stringify(pizzaBasket))
            dispatch({ type: TYPES_PIZZA.ADD_BASKET, payload: pizzaBasket })
        } else {
            setAlert(true)
            setTimeout(() => { setAlert(false) }, 3000)
            return
        }
    }
    return (
        <div className='pizzas'>
            <Alert severity="info" sx={{ transition: "0.3s", top: "30px", left: alert ? "0px" : "-380px", width: "320px", height: "65px", position: "fixed", }}>
                <AlertTitle>Info</AlertTitle>
                Already added.
            </Alert>
            <div className="pizzas_content">
                <center><h1 className='pizza_titleH1'>Recommended menu</h1></center>
                <div className="pizzas_types">
                    {pizzas.map((el: TypePizza, id: number) => (
                        <div key={id} className='pizza'>
                            <img src={el.img} alt="pizza" />
                            <h2>{el.title}</h2>
                            <p>{el.description}</p>
                            <h1>${el.price}.00</h1>
                            <div className="pizza_regular">
                                <h4>Regular</h4>
                                <ExpandMoreIcon />
                            </div>
                            <button onClick={() => handleAddPizza(el)}>Add to cart</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
