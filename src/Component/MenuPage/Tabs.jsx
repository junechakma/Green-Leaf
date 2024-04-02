import { useState } from "react"
import { Link } from "react-router-dom"

function Tabs() {
    const [activeId, setActiveId] = useState(1)

    const handleChange = (id) => {
        setActiveId(id)
    }

    return (
        <div className="py-10">

            <ul className="flex justify-center flex-wrap gap-4 border-y-2  border-secondary font-semibold">
                <li className="py-4">
                    <Link onClick={() => handleChange(1)} className={`text-xl inline-block px-4 py-1  border-b-2  rounded-t-lg hover:text-secondary hover:border-secondary uppercase ${activeId === 1 ? "text-secondary border-secondary" : "text-black border-black"}`}>ALL</Link>
                </li>
                <img src="/assets/background/square.svg" alt="" />
                <li className="py-4">
                    <Link onClick={() => handleChange(2)} className={`text-xl inline-block px-4 py-1  border-b-2  rounded-t-lg hover:text-secondary hover:border-secondary uppercase ${activeId === 2 ? "text-secondary border-secondary" : "text-black border-black"}`}>Chaii</Link>
                </li>
                <img src="/assets/background/square.svg" alt="" />
                <li className="py-4">
                    <Link onClick={() => handleChange(6)} className={`text-xl inline-block px-4 py-1  border-b-2  rounded-t-lg hover:text-secondary hover:border-secondary uppercase ${activeId === 6 ? "text-secondary border-secondary" : "text-black border-black"}`}>Snacks</Link>
                </li>
                <img src="/assets/background/square.svg" alt="" />
                <li className="py-4">
                    <Link onClick={() => handleChange(3)} className={`text-xl inline-block px-4 py-1  border-b-2  rounded-t-lg hover:text-secondary hover:border-secondary uppercase ${activeId === 3 ? "text-secondary border-secondary" : "text-black border-black"}`}>Desserts</Link>
                </li>
                <img src="/assets/background/square.svg" alt="" />
                <li className="py-4">
                    <Link onClick={() => handleChange(4)} className={`text-xl inline-block px-4 py-1  border-b-2  rounded-t-lg hover:text-secondary hover:border-secondary uppercase ${activeId === 4 ? "text-secondary border-secondary" : "text-black border-black"}`}>Hot Drinks</Link>
                </li>
                <img src="/assets/background/square.svg" alt="" />
                <li className="py-4">
                    <Link onClick={() => handleChange(5)} className={`text-xl inline-block px-4 py-1  border-b-2  rounded-t-lg hover:text-secondary hover:border-secondary  uppercase ${activeId === 5 ? "text-secondary border-secondary" : "text-black border-black"}`}>Cold Drinks</Link>
                </li>
            </ul>

            <div>

            </div>

        </div>
    )
}

export default Tabs
