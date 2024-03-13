import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { TypePizza } from '../../../redux/pizzaReducer';
import { TYPES_PIZZA } from '../../../redux/TypeReducer';

export default function Basket() {
  let pizza = useSelector((state) => state.basket.pizza)
  let dispatch = useDispatch()

  function handleDeletePizza(id: number) {
    let data = JSON.parse(localStorage.getItem('basket')) || []
    data = data.filter((el: TypePizza) => el.id !== id)
    localStorage.setItem('basket', JSON.stringify(data))
    dispatch({
      type: TYPES_PIZZA.DELETE_BASKET,
      payload: data
    })
  }
  return (
    <div className='basket'>
      <section>
        {pizza.length > 0 ? pizza.map((el: TypePizza, id: number) => (
          <div key={id} className='bascet_pizza'>
            <img src={el.img} alt="pizza" />
            <div className="basket_pizza_title">
              <h2>{el.title}</h2>
              <h4>{el.description}</h4>
            </div>
            <div className="basket_pizza_item">
              <h2>${el.price}.00</h2>
              <div className="basket_pizza_item_btns">
                <button onClick={() => handleDeletePizza(el.id)}>Delete</button>
                <button>Pay</button>
              </div>
            </div>
          </div>
        )) : (<center><h1>you haven't ordered pizza yet</h1></center>)}
      </section>

    </div>
  )
}
