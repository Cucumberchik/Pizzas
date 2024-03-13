
export type TypePizza = {
    img: string,
    title: string,
    description: string,
    price: number,
    id: number,
}
interface IState {
    pizza: TypePizza[]
}



const initial = {
    pizza: [
        { id: 124, img: "https://i.imgur.com/SNa3z9q.png", title: "Margherita Pizza", description: "Made with San Marzano tomatoes, mozzarella cheese, and fresh basil.", price: 30 },
        { id: 214, img: "https://i.imgur.com/Z9mxyqr.png", title: "Cheese Lovers", description: "Combination of Alfredo sauce and two cheeses – Romano, and Parmesan.", price: 20 },
        { id: 421, img: "https://i.imgur.com/Z9mxyqr.png", title: "Pepperoni Pizza", description: "Pizza with homemade spicy beef sausage", price: 25 }
    ]
}
export default function pizzaReducer(state: IState = initial) {
    return state
}
