import { useState } from "react"
import { Link } from "react-router-dom"


const menuData = {
    "CHAII": [
        {
            "name": "Karak/Masala Chaii",
            "price": "£1.50",
            "ingredients": ["tea leaves", "spices", "milk", "sugar"]
        },
        {
            "name": "Gurer (Molasses) Chaii",
            "price": "£1.50",
            "ingredients": ["tea leaves", "molasses", "milk"]
        },
        {
            "name": "Ginger/Lemon/Honey/Mint Chaii",
            "price": "£1.50",
            "ingredients": ["tea leaves", "ginger", "lemon", "honey", "mint", "milk"]
        },
        {
            "name": "Green Tea",
            "price": "£1.50",
            "ingredients": ["green tea leaves", "water"]
        }
    ],
    "COFFEE": [
        {
            "name": "Cappuccino",
            "price": "£1.50",
            "ingredients": ["espresso", "steamed milk", "milk foam"]
        },
        {
            "name": "Espresso",
            "price": "£1.50",
            "ingredients": ["espresso"]
        },
        {
            "name": "Arabic Coffee",
            "price": "£1.50",
            "ingredients": ["Arabic coffee beans", "water", "cardamom"]
        },
        {
            "name": "Black Coffee",
            "price": "£1.00",
            "ingredients": ["coffee beans", "water"]
        }
    ],
    "COLD DRINKS": [
        {
            "name": "Cold Coffee",
            "price": "£1.50",
            "ingredients": ["coffee", "milk", "ice cubes", "sugar"]
        },
        {
            "name": "Mojito",
            "price": "£1.99",
            "ingredients": ["mint leaves", "lime", "sugar", "soda water", "ice cubes"]
        },
        {
            "name": "Milk Shake",
            "price": "£1.99",
            "ingredients": ["milk", "ice cream", "sugar", "flavoring"]
        },
        {
            "name": "Cold coffee latte/black",
            "price": "£1.50",
            "ingredients": ["coffee", "milk", "ice (for latte)"]
        },
        {
            "name": "Ice lemon, mint, honey tea",
            "price": "£1.50",
            "ingredients": ["tea", "lemon", "mint", "honey", "ice"]
        },
        {
            "name": "Freshly Squeezed Orange Juice",
            "price": "£3.00",
            "ingredients": ["oranges"]
        },
        {
            "name": "Water/Can Drinks",
            "price": "£1.00",
            "ingredients": []
        },
        {
            "name": "Redbull/J20",
            "price": "£1.50",
            "ingredients": []
        }
    ],

    "SNACKS": [
        {
            "name": "Shingara (Veg)",
            "price": "£1.00",
            "ingredients": ["flour", "potatoes", "spices", "oil"]
        },
        {
            "name": "Samosa: (Veg, Chicken)",
            "price": "£1.50",
            "ingredients": ["flour", "potatoes/chicken", "spices", "oil"]
        },
        {
            "name": "ROLL (Veg, Chicken)",
            "price": "£1.50",
            "ingredients": ["flour", "vegetables/chicken", "spices", "oil"]
        },
        {
            "name": "Chana (Chickpeas) / Piazi",
            "price": "£2.50 / £2.00 (S)",
            "ingredients": ["chickpeas", "onion", "spices"]
        },
        {
            "name": "Chana, Piazi, Parched rice mix",
            "price": "£3.50 (L)",
            "ingredients": ["chickpeas", "onion", "parched rice", "spices"]
        }
    ],
    "HOT DRINKS ": [
        {
            "name": "Cappuccino/Espresso/Arabic/Black/Hot Chocolate",
            "price": "£1.50",
            "ingredients": ["coffee/espresso", "milk", "chocolate (for Hot Chocolate)"]
        },
        {
            "name": "Karak/Masala/Gurer Chai",
            "price": "£1.50",
            "ingredients": ["tea leaves", "spices", "milk", "sugar/molasses"]
        },
        {
            "name": "Tea: (Lemon/Ginger/Honey/Green/Mint)",
            "price": "£1.50",
            "ingredients": ["tea leaves", "lemon/ginger/honey/mint", "water"]
        }
    ],
    "DESSERTS": [
        {
            "name": "Mishti (each)",
            "price": "£1.80",
            "ingredients": ["flour", "sugar", "milk"]
        },
        {
            "name": "Firni",
            "price": "£2.50",
            "ingredients": ["rice", "milk", "sugar", "nuts"]
        },
        {
            "name": "Sweet Yogurt (Doi)",
            "price": "£3.00",
            "ingredients": ["yogurt", "sugar", "flavorings"]
        }
    ],
    "SPECIAL": [
        {
            "name": "Special Mishti & Masala pan",
            "price": "£1.00",
            "ingredients": ["various sweets", "betel leaves", "areca nuts", "flavored ingredients"]
        }
    ]

}

function Tabs() {
    const [activeTab, setActiveTab] = useState("ALL");

    const handleChange = (tab) => {
        setActiveTab(tab);
    };

    const filteredMenu = activeTab === "ALL" ? Object.values(menuData).flat() : menuData[activeTab];

    return (
        <div className="py-10 relative">
            {/* Tab */}
            <ul className="flex justify-center flex-wrap md:gap-4 border-y-2  border-secondary font-semibold">
                {Object.keys(menuData).map((category, index) => (
                    <>
                        <li className="py-2 md:py-4" key={index}>
                            <Link
                                onClick={() => handleChange(category)}
                                className={`md:text-xl inline-block px-3 md:px-4 py-1 border-b-2 rounded-t-lg hover:text-secondary hover:border-secondary uppercase ${activeTab === category ? "text-secondary border-secondary" : "text-black border-black"
                                    }`}
                            >
                                {category}
                            </Link>
                        </li>
                        {
                            Object.keys(menuData).length !== index + 1 && (
                                <img src="/assets/menu/sqare.svg" />
                            )
                        }
                    </>
                ))}
            </ul>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                {filteredMenu.map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                        <div>
                            <img src="/assets/background/cup.png" alt="" className="w-32 md:w-36" />
                        </div>
                        <div className="w-full flex flex-col gap-2 text-sm md:text-base">
                            <div className="w-full flex flex-wrap gap-2 items-center justify-between">
                                <h2 className="w-[40vw] md:w-full text-sm md:text-lg font-semibold ">{item.name}</h2>
                                <hr className="w-1/4 md:w-1/3 " />
                                <p className="text-sm md:text-lg font-semibold self-end">{item.price}</p>
                            </div>
                            <hr className="border border-secondary" />
                            <div>
                                <p className="capitalize text-secondary md:text-base">{item.ingredients.join(", ")}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


            <h2 id="student" className="text-lg font-semibold text-center text-secondary pt-10">Any Hot Drink (£1.20 for Students)</h2>


        </div>
    );
}


export default Tabs
