import React, { useState } from 'react'
import './header.scss'
import { DateRange } from 'react-date-range';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBed,
    faCalendarDays,
    faCar,
    faPerson,
    faPlane,
    faTaxi,
} from "@fortawesome/free-solid-svg-icons";

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

import { format } from "date-fns"
import { useNavigate } from 'react-router-dom';


export const Header = ({type}) => {
    // states
    const [destination , setDestination] = useState('')
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [openOptions, setOpenOptions] = useState(false)
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
    })

    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev, [name]: operation === 'i' ? options[name] + 1 : options[name] - 1
            }
        })
    }

    const navigate = useNavigate()

    const handleSubmit = () => {
        navigate("/hotels" , {state: {destination , date , options }})
    }

    return (
        <header className="header">
            <div className={`headerContainer ${type === "list" ? 'listMode' : ""}`}>
                <div className="headerList">
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car rentals</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport taxis</span>
                    </div>
                </div>


                { type !== "list" &&
                    <>
                        <h1 className="headerTitle">Find your next stay</h1>
                        <p className="headerDescription">Search low prices on hotels, homes and much more...</p>
                        <button className="headerButton"> Sign in / Register</button>
                        <div className="headerSearch">
                            <div className="headerSearchItem">
                                <FontAwesomeIcon
                                    icon={faBed} className="headerIcon" />
                                <input
                                    type="text"
                                    placeholder="Where are you going?"
                                    className="headerSearchInput"
                                    onChange={e=> setDestination(e.target.value)}
                                />
                            </div>


                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                                <span className="headerSearchText" onClick={() =>
                                    setOpenDate(!openDate)
                                }>
                                    {
                                        `${format(date[0].startDate, "MM/dd/yyyy")}  to ${format(date[0].endDate, "MM/dd/yyyy")} `
                                    }
                                </span>
                                {openDate && <DateRange
                                    editableDateInputs={true}
                                    onChange={item => setDate([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={date}
                                    className="date"
                                    minDate={new Date()}
                                />}
                            </div>


                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                                <span className="headerSearchText" onClick={() => setOpenOptions(!openOptions)}>
                                    {`${options.adult} adults ${options.children} children ${options.room} ${options.room > 1 ? "rooms" : "room"}`}

                                </span>
                                {openOptions && <div className="options">
                                    <div className="optionItem">
                                        <span className="optionText">Adult</span>
                                        <div className="optionCounter">
                                            <button
                                                disabled={options.adult <= 1}
                                                className="optionCounterButton"
                                                onClick={() => handleOption("adult", "d")}
                                            >-</button>
                                            <span className="optionText">{options.adult}</span>
                                            <button className="optionCounterButton"
                                                onClick={() => handleOption("adult", "i")}

                                            >+</button>
                                        </div>
                                    </div>
                                    <div className="optionItem">
                                        <span className="optionText">Children</span>
                                        <div className="optionCounter">
                                            <button className="optionCounterButton"
                                                disabled={options.children <= 0}
                                                onClick={() => handleOption("children", "d")}

                                            >-</button>
                                            <span className="optionText">{options.children}</span>
                                            <button className="optionCounterButton"
                                                onClick={() => handleOption("children", "i")}

                                            >+</button>
                                        </div>
                                    </div>
                                    <div className="optionItem">
                                        <span className="optionText">Rooms</span>
                                        <div className="optionCounter">
                                            <button className="optionCounterButton"
                                                onClick={() => handleOption("room", "d")}
                                                disabled={options.room <= 1}
                                            >-</button>
                                            <span className="optionText">{options.room}</span>
                                            <button className="optionCounterButton"
                                                onClick={() => handleOption("room", "i")}

                                            >+</button>
                                        </div>
                                    </div>
                                </div>}
                            </div>
                            <div className="headerSearchItem">
                                <button className="headerButton"
                                onClick={()=> handleSubmit()}>
                                    Search
                                </button>
                            </div>
                        </div>
                    </>
                }
            </div>
        </header>
    )
}
