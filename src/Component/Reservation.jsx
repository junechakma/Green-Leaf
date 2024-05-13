import { useState } from "react"
import { Link } from "react-router-dom"


function Reservation() {

    const [formData, setFormData] = useState({
        name: "",
        guests: "",
        date: "",
        slot: "",
        phone: "",
        email: "",
        occasions: "",
        allergies: "",
        spacialNote: ""
    })

    console.log(formData)

    const [errors, setErrors] = useState({});
    const [currentTab, setCurrentTab] = useState(1);
    const [reservationStatus, setReservationStatus] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleTabSwitch = (tab) => {
        if (tab === 2 && !validateFirstTab()) return;
        setCurrentTab(tab);
    }

    const validateFirstTab = () => {
        const { name, guests, date, slot } = formData;
        const errors = {};
        if (!name) errors.name = "Name is required";
        if (!date) errors.date = "Date is required";
        if (!guests) errors.guests = "Guests is required";
        if (!slot) errors.slot = "Slot is required";
        setErrors(errors);
        return Object.keys(errors).length === 0;
    }

    const validateSecondTab = () => {
        const { phone, email } = formData;
        const errors = {};
        if (!phone) errors.phone = "Phone Number is required";
        if (!email) errors.email = "Email is required";
        setErrors(errors)
        return Object.keys(errors).length === 0
    }

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    // Function to handle changes in the date field
    const handleDateChange = (event) => {
        const rawDate = event.target.value;
        const formattedDate = formatDate(rawDate);
        setFormData({ ...formData, date: formattedDate });
    };

    // Function to format the date
    const formatDate = (rawDate) => {
        const date = new Date(rawDate);
        const formattedDate = date.toISOString().split('T')[0];
        return formattedDate;
    };


    const handleSubmit = async () => {
        setIsLoading(true); // Step 2: Show loading animation
        if (!validateSecondTab()) {
            setIsLoading(false); // Step 2: Hide loading animation if validation fails
            return;
        }
        try {
            const response = await fetch("https://uvs-a001.vercel.app/api/reservations", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            if (data) {
                setReservationStatus("success");
                setIsLoading(false);
                setFormData({
                    name: "",
                    guests: "",
                    date: "",
                    slot: "",
                    phone: "",
                    email: "",
                    occasions: "",
                    allergies: "",
                    spacialNote: ""
                });
                setCurrentTab(1)
                setErrors({});
            }

        } catch (error) {
            console.error("Error:", error);
            setReservationStatus("error");
            setIsLoading(false); // Step 2: Hide loading animation on error
        }
    };




    return (
        <div>
            <div className="w-[85vw] md:w-[60vw] lg:w-[40vw] mx-auto border p-6 md:p-10  flex flex-col gap-4 bg-white">
                <div className="flex justify-between">
                    <h1 className="text-2xl  font-semibold "> Store Pick-up</h1>
                    <div className="flex gap-1 flex-wrap items-center md:items-start  ">
                        <p className="font-semibold text-sm md:text-base hidden md:block">Powered By</p>
                        <Link to="https://compileq.co.uk/" target="_blank">
                            <img src="https://compileq.co.uk/_next/static/media/CompileQ-Logo.e6c41608.svg" className="w-24" />
                        </Link>
                    </div>
                </div>

                <hr />
                {/* Tabs */}
                <div className="grid grid-cols-2 gap-6" >
                    <div className={`py-2 border-b-2 ${currentTab === 1 ? "border-secondary text-secondary" : "text-black"}`} onClick={() => handleTabSwitch(1)}>
                        <p className="text-center font-bold" >Pick-up details</p>
                    </div>
                    <div className={`py-2 border-b-2 ${currentTab === 2 ? "border-secondary text-secondary" : "text-black"}`} onClick={() => handleTabSwitch(2)}>
                        <p className="text-center font-bold">Personal Details</p>
                    </div>
                </div>

                {/* Form */}
                <div className="grid grid-cols-2 w-full gap-2 md:gap-6">

                    {
                        currentTab === 1 ? (
                            <>
                                <div className=" flex flex-col my-2">
                                    <label
                                        className="text-base font-semibold mb-2"
                                    >
                                        Full Name*
                                    </label>
                                    <input
                                        required
                                        name="name"
                                        type="text"
                                        className={`border ${errors.name ? "border-red-500" : "border-gray"} py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline bg-[#FAFAFA]  w-full`}
                                        placeholder="John Doe"
                                        onChange={handleInputChange}
                                        value={formData.name}
                                    />
                                    {
                                        errors.name && <p className="text-red-500 pt-1">{errors.name}</p>
                                    }
                                </div>

                                {/* Guests */}
                                <div className=" flex flex-col my-2">
                                    <label
                                        className="text-base font-semibold mb-2"
                                    >
                                        Guests*
                                    </label>
                                    <select
                                        required
                                        name="guests"
                                        className={`border ${errors.guests ? "border-red-500" : "border-gray"} py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline bg-[#FAFAFA] w-full`}
                                        value={formData.guests}
                                        onChange={handleInputChange}
                                    >
                                        <option value="" disabled>Select number of guests</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                    </select>
                                    {
                                        errors.guests && <p className="text-red-500 pt-1">{errors.guests}</p>
                                    }
                                </div>

                                {/* Date */}
                                <div className="flex flex-col my-2">
                                    <label
                                        className="text-base font-semibold mb-2"
                                    >
                                        Date*
                                    </label>
                                    <input
                                        required
                                        type="date"
                                        name="date"
                                        className={`border ${errors.date ? "border-red-500" : "border-gray"} py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline bg-[#FAFAFA] w-full`}
                                        value={formData.date}
                                        onChange={handleDateChange}
                                    />
                                    {
                                        errors.date && <p className="text-red-500 pt-1">{errors.date}</p>
                                    }

                                </div>

                                {/* Time */}
                                <div className="flex flex-col my-2">
                                    <label
                                        className="text-base font-semibold mb-2"
                                    >
                                        Time*
                                    </label>
                                    <select
                                        name="slot"
                                        className={`border ${errors.slot ? "border-red-500" : "border-gray"} py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline bg-[#FAFAFA] w-full`}
                                        value={formData.slot}
                                        onChange={handleInputChange}
                                    >
                                        <option value="" disabled>Select a time</option>
                                        <option value="9:00 AM">9:00 AM</option>
                                        <option value="9:30 AM">9:30 AM</option>
                                        <option value="10:00 AM">10:00 AM</option>
                                        <option value="10:30 AM">10:30 AM</option>
                                        <option value="11:00 AM">11:00 AM</option>
                                        <option value="11:30 AM">11:30 AM</option>
                                        <option value="12:00 PM">12:00 PM</option>
                                        <option value="12:30 PM">12:30 PM</option>
                                        <option value="1:00 PM">1:00 PM</option>
                                        <option value="1:30 PM">1:30 PM</option>
                                        <option value="2:00 PM">2:00 PM</option>
                                        <option value="2:30 PM">2:30 PM</option>
                                        <option value="3:00 PM">3:00 PM</option>
                                        <option value="3:30 PM">3:30 PM</option>
                                        <option value="4:00 PM">4:00 PM</option>
                                        <option value="4:30 PM">4:30 PM</option>
                                        <option value="5:00 PM">5:00 PM</option>
                                        <option value="5:30 PM">5:30 PM</option>
                                        <option value="6:00 PM">6:00 PM</option>
                                        <option value="6:30 PM">6:30 PM</option>
                                        <option value="7:00 PM">7:00 PM</option>
                                        <option value="7:30 PM">7:30 PM</option>
                                        <option value="8:00 PM">8:00 PM</option>
                                        <option value="8:30 PM">8:30 PM</option>
                                        <option value="9:00 PM">9:00 PM</option>
                                        <option value="9:30 PM">9:30 PM</option>
                                        <option value="10:00 PM">10:00 PM</option>
                                        <option value="10:30 PM">10:30 PM</option>
                                        <option value="11:00 PM">11:00 PM</option>
                                    </select>
                                    {
                                        errors.slot && <p className="text-red-500 pt-1">{errors.slot}</p>
                                    }
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="flex flex-col my-4">
                                    <label
                                        className="text-base font-semibold mb-2"
                                    >
                                        Phone Number*
                                    </label>
                                    <input
                                        required
                                        type="number"
                                        name="phone"
                                        placeholder="+44 0000 00000"
                                        value={formData.phone}
                                        className={`border ${errors.phone ? "border-red-500" : "border-gray"} py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline bg-[#FAFAFA] w-full`}
                                        onChange={handleInputChange}
                                    />
                                    {
                                        errors.phone && <p className="text-red-500 pt-1">{errors.phone}</p>
                                    }
                                </div>
                                <div className=" flex flex-col my-4">
                                    <label
                                        htmlFor="FullName"
                                        className="text-base font-semibold mb-2"
                                    >
                                        Email *
                                    </label>

                                    <input
                                        required
                                        type="email"
                                        name="email"
                                        placeholder="example@gmail.com"
                                        className={`border ${errors.phone ? "border-red-500" : "border-gray"} py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline bg-[#FAFAFA] w-full`}
                                        value={formData.email}
                                        onChange={handleInputChange}
                                    />
                                    {
                                        errors.email && <p className="text-red-500 pt-1">{errors.email}</p>
                                    }
                                </div>

                                {/* Occasions */}
                                <div className=" flex flex-col my-2">
                                    <label
                                        className="text-base font-semibold mb-2"
                                    >
                                        Occasion
                                    </label>
                                    <select
                                        required
                                        name="occasions"
                                        className="border border-gray py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline bg-[#FAFAFA] w-full"
                                        value={formData.occasions}
                                        onChange={handleInputChange}
                                    >
                                        <option value="" disabled>Select the occasion</option>
                                        <option value="birthday">Birthday</option>
                                        <option value="anniversary">Anniversary</option>
                                        <option value="date">Date Night</option>
                                        <option value="business">Business Dinner</option>
                                        <option value="family_gathering">Family Gathering</option>
                                        <option value="friends_get_together">Friends Get-Together</option>
                                        <option value="none">None</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                {/* Allergies */}
                                <div className=" flex flex-col my-2">
                                    <label
                                        className="text-base font-semibold mb-2"
                                    >
                                        Allergies
                                    </label>
                                    <select
                                        required
                                        name="allergies"
                                        className="border border-gray py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline bg-[#FAFAFA] w-full"
                                        value={formData.allergies}
                                        onChange={handleInputChange}
                                    >
                                        <option value="" disabled>Select any allergies</option>
                                        <option value="gluten">Gluten</option>
                                        <option value="dairy">Dairy</option>
                                        <option value="nuts">Nuts</option>
                                        <option value="shellfish">Shellfish</option>
                                        <option value="soy">Soy</option>
                                        <option value="peanut">Peanut</option>
                                        <option value="none">None</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div className='col-span-2 flex flex-row gap-6'>

                                    {/* spacial-note */}
                                    <div className="w-full flex flex-col my-4">
                                        <label
                                            className="text-base font-semibold mb-2"
                                        >
                                            Enquiry To Be Sent
                                        </label>
                                        <textarea
                                            name="spacialNote"
                                            className="border border-gray py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline bg-[#FAFAFA] w-full"
                                            value={formData.spacialNote}
                                            onChange={handleInputChange}
                                            placeholder="Special note..."
                                            rows="4"
                                        />
                                    </div>
                                </div>
                            </>
                        )
                    }
                </div>

                <div >
                    {currentTab === 1 && (
                        <div className="grid grid-cols-2 gap-6">
                            <div className="error-message">{errors.firstTab}</div>
                            {/* Your form fields for the first tab */}
                            <button type="button" className="border md:px-20 py-2 hover:bg-secondary hover:text-white" onClick={() => handleTabSwitch(2)}>Next</button>
                        </div>
                    )}
                    {currentTab === 2 && (
                        <div className="grid grid-cols-2 gap-6">
                            {/* Your form fields for the second tab */}
                            <button type="button" className="border md:px-20 py-2 hover:bg-secondary hover:text-white" onClick={() => handleTabSwitch(1)}>Previous</button>
                            <button type="button" className="border md:px-20 py-2 hover:bg-secondary hover:text-white" onClick={handleSubmit}>Submit</button>
                        </div>
                    )}

                    {
                        isLoading && (
                            <div className="flex justify-center items-center h-full mt-10">
                                <div className="flex space-x-2">
                                    <div className="w-3 h-3 bg-secondary rounded-full animate-bounce"></div>
                                    <div className="w-3 h-3 bg-secondary rounded-full animate-bounce"></div>
                                    <div className="w-3 h-3 bg-secondary rounded-full animate-bounce"></div>
                                </div>
                            </div>
                        )
                    }

                    {reservationStatus === "success" && (
                        <div className="text-green mt-4 font-semibold">Reservation successful!</div>
                    )}
                    {reservationStatus === "error" && (
                        <div className="text-red-600 mt-4 font-semibold">Reservation failed. Please try again later.</div>
                    )}

                </div>
            </div>
        </div>
    )
}

export default Reservation