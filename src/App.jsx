import Card from './components/Card'


const items=  [
    {
      "foodName": "Margherita Pizza",
      "img": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFnZXJhdGVhJTIwcGl6emF8ZW58MHwwfDB8fHww",
      "rating": 4.2,
      "price": 360 ,
      "desc": "Classic Italian pizza with fresh tomatoes, mozzarella, and basil.",
      "type": "Veg"
    },
    {
      "foodName": "  Grilled Burger",
      "img": "https://media.istockphoto.com/id/1309352410/photo/cheeseburger-with-tomato-and-lettuce-on-wooden-board.webp?a=1&b=1&s=612x612&w=0&k=20&c=mzctiDkmbz504e4JIt7-_fqqv15keYuxdsCH6IA9tug=",
      "rating": 3.6,
      "price": 190 ,
      "desc": "Juicy grilled chicken patty with lettuce, tomato, and special sauce.",
      "type": "Veg"
    },
    {
      "foodName": "Chicken Momos",
      "img": "https://media.istockphoto.com/id/1341504203/photo/fried-momos-dumpling.webp?a=1&b=1&s=612x612&w=0&k=20&c=mtHAwF3TH997DT_4gJ-hgECmJ-uVhAQvFAsxIEulrSI=",
      "rating": 4.9,
      "price": 390 ,
      "desc": "A mix of fresh sashimi, nigiri, and sushi rolls served with soy sauce and wasabi.",
      "type": "NonVeg"
    },
    {
      "foodName": "Paneer Tikka",
      "img": "https://media.istockphoto.com/id/1186759790/photo/paneer-tikka-at-skewers-in-black-bowl-at-dark-slate-background-paneer-tikka-is-an-indian.webp?a=1&b=1&s=612x612&w=0&k=20&c=OGbvmFCV_JDWB8XqIJKEAjXq88NecVPptuC0lk4IxR0=",
      "rating": 4.1,
      "price": 190 ,
      "desc": "Healthy bowl with quinoa, avocado, chickpeas, and a tangy tahini dressing.",
      "type": "Veg"
    }
  ]
  

function App(){
 return(
  <>
    <div className="flex gap-4 justify-center mt-12">
        {
        items.map(item=><Card img={item.img} pricing={item.price} title={item.foodName} desc={item.desc} type={item.type} ratings={item.rating}/>)
        }
    </div>
 </>
 )
}

export default App;