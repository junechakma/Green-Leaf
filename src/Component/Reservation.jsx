import { useState } from "react"
import { Link } from "react-router-dom"




function Reservation() {

    const [isPersonalDetails, setIsPersonalDetails] = useState(false)
    const handleTabSwitch = () => {
        setIsPersonalDetails(!isPersonalDetails)
    }
    return (
        <div>
            <div className="w-[85vw] md:w-[40vw] mx-auto border p-6 md:p-10  flex flex-col gap-4 bg-white">
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
                    <div className={`py-2 border-b-2 ${isPersonalDetails ? "text-black" : "border-secondary text-secondary"}`} onClick={() => setIsPersonalDetails(false)}>
                        <p className="text-center font-bold" >Pick-up details</p>
                    </div>
                    <div className={`py-2 border-b-2 ${isPersonalDetails ? "border-secondary text-secondary" : "text-black"}`} onClick={() => setIsPersonalDetails(true)}>
                        <p className="text-center font-bold">Personal Details</p>
                    </div>
                </div>

                {/* Form */}
                <div className="grid grid-cols-2 w-full gap-2 md:gap-6">

                    {
                        !isPersonalDetails ? (
                            <>
                                <div className=" flex flex-col my-2">
                                    <label
                                        className="text-base font-semibold mb-2"
                                    >
                                        Full Name *
                                    </label>
                                    <input
                                        required
                                        name="name"
                                        type="text"
                                        className="border border-gray py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline bg-[#FAFAFA] w-full "
                                        placeholder="John Doe"
                                    />
                                </div>

                                {/* Guests */}
                                <div className=" flex flex-col my-2">
                                    <label
                                        className="text-base font-semibold mb-2"
                                    >
                                        Guests *
                                    </label>
                                    <select
                                        required
                                        name="guests"
                                        className="border border-gray py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline bg-[#FAFAFA] w-full"
                                    >
                                        <option value="" disabled>Select Total Number of Guests</option>
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
                                        className="border border-gray py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline bg-[#FAFAFA] w-full"
                                    />
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
                                        className="border border-gray py-3 px-3 text-black leading-tight focus:outline-none focus:shadow-outline bg-[#FAFAFA] w-full"
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
                                        className="border border-gray py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline bg-[#FAFAFA] w-full "
                                    />

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
                                        className="border border-gray py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline bg-[#FAFAFA] w-full "
                                        placeholder="example@gmail.com"
                                    />
                                </div>

                                {/* Occasions*/}
                                <div className=" flex flex-col my-2">
                                    <label
                                        className="text-base font-semibold mb-2"
                                    >
                                        Occasion *
                                    </label>
                                    <select
                                        required
                                        name="occasions"
                                        className="border border-gray py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline bg-[#FAFAFA] w-full"
                                    >
                                        <option value="" disabled>Select The Occasion</option>
                                        <option value="2">Birthday</option>
                                        <option value="3">Aniversary</option>
                                        <option value="4">Date</option>
                                    </select>
                                </div>

                                {/* Allergies */}
                                <div className=" flex flex-col my-2">
                                    <label
                                        className="text-base font-semibold mb-2"
                                    >
                                        Occasion *
                                    </label>
                                    <select
                                        required
                                        name="occasions"
                                        className="border border-gray py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline bg-[#FAFAFA] w-full"
                                    >
                                        <option value="" disabled>Select The Occasion</option>
                                        <option value="2">Birthday</option>
                                        <option value="3">Aniversary</option>
                                        <option value="4">Date</option>
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
                                            placeholder="Special note..."
                                            rows="4"
                                        />
                                    </div>
                                </div>
                            </>
                        )
                    }
                </div>

                <div className="grid grid-cols-2 gap-6">
                    <button type="button" className="border md:px-20 py-2 hover:bg-secondary hover:text-white" onClick={handleTabSwitch}>{isPersonalDetails ? "Previous" : "Cancel"}</button>
                    <button type="button" className="border md:px-20 py-2 hover:bg-secondary hover:text-white" onClick={handleTabSwitch}>{isPersonalDetails ? "Submit" : "Next"}</button>
                </div>
            </div>
        </div>
    )
}

export default Reservation