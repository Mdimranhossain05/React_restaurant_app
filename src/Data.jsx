import cartItem1 from "../src/assets/burger.png"
import cartItem2 from "../src/assets/french_fries.png"
import cartItem3 from "../src/assets/pizza.png"
import cartItem4 from "../src/assets/sandwich.png"

import menuItem1 from "../src/assets/food.png"
import menuItem2 from "../src/assets/french_fries_menu.png"
import menuItem3 from "../src/assets/fried_chicken.png"
import menuItem4 from "../src/assets/pizza_menu.png"
import menuItem5 from "../src/assets/salad.png"
import menuItem6 from "../src/assets/latte.png"

import customer1 from "../src/assets/customer1.jpg"
import customer2 from "../src/assets/customer2.jpg"
import customer3 from "../src/assets/customer3.jpg"

const cart = [
    {
        img: cartItem1,
        name: "Juicy Burger",
        price: "5 $"
    },
    {
        img: cartItem2,
        name: "French Fries",
        price: "6 $"
    },
    {
        img: cartItem3,
        name: "Pizza",
        price: "7.5 $"
    },
    {
        img: cartItem4,
        name: "Sandwitch",
        price: "2.3 $"
    },
    
];

const menuItem = [
    {
        img:menuItem1,
        name: "Burger Juice Combo",
        price: "5 $"
    },
    {
        img:menuItem2,
        name: "French Fries",
        price: "4 $"
    },
    {
        img:menuItem3,
        name: "Chicken Fry",
        price: "2.2 $"
    },
    {
        img:menuItem4,
        name: "Pizza",
        price: "6 $"
    },
    {
        img:menuItem5,
        name: "Salad",
        price: "2.3 $"
    },
    {
        img:menuItem6,
        name: "Capachino Coffe",
        price: "3 $"
    }
]

const products = [
    {
        img: cartItem1,
        title: "Fresh Burger",
    },
    {
        img: cartItem2,
        title: "Delicius French Fries"
    },
    {
        img: cartItem3,
        title: "Special Pizza"
    }
]

const customers = [
    {
        img: customer1,
        name: "Robert Daniel",
        comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ab distinctio nemo inventore aut eum modi possimus enim blanditiis corporis."
    },
    {
        img: customer2,
        name: "Chris Smith",
        comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ab distinctio nemo inventore aut eum modi possimus enim blanditiis corporis."
    },
    {
        img: customer3,
        name: "Brad Lawrence",
        comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ab distinctio nemo inventore aut eum modi possimus enim blanditiis corporis."
    }
]

const blogItems = [
    {
        img:menuItem1,
        name: "Burger Juice Combo",
        author: "By Admin / 21th Aug, 2023",
        desc: "Lorem ipsum dolor sit Lorem ipsum dolor sit amet...." 
    },
    {
        img:menuItem2,
        name: "French Fries",
        author: "By Admin / 21th Aug, 2023",
        desc: "Lorem ipsum dolor sit Lorem ipsum dolor sit amet...." 
    },
    {
        img:menuItem3,
        name: "Chicken Fry",
        author: "By Admin / 21th Aug, 2023",
        desc: "Lorem ipsum dolor sit Lorem ipsum dolor sit amet...." 
    },
    {
        img:menuItem4,
        name: "Pizza",
        author: "By Admin / 21th Aug, 2023",
        desc: "Lorem ipsum dolor sit Lorem ipsum dolor sit amet...." 
    },
]

export {cart,menuItem,products, customers, blogItems}

