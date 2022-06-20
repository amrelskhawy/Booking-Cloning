import React, { useState } from 'react'
import { Header } from '../../components/header/Header'
import { Navbar } from '../../components/navbar/Navbar'
import {useLocation} from "react-router-dom";
import './list.scss'

import { format } from "date-fns"
import { DateRange } from 'react-date-range';
import { SearchItem } from 'components/SearchItem/SearchItem';


export const List = () => {
    const location = useLocation()
    const [openDate, setOpenDate] = useState(false)
    const [destination , setDestination] = useState(location.state.destination)
    const [date , setDate] = useState(location.state.date)
    const [options , setOptions] = useState(location.state.options)

    return (
        <>
            <Navbar />
            <Header type="list" />
            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                        <h1 className="lsTitle">Search</h1>
                        <div className="listSearchItem">
                            <label htmlFor="dest">Destination</label>
                            <input value={location.state.destination} type="text" id="dest" placeholder='madrid' />
                        </div>
                        <div className="listSearchItem">
                            <label htmlFor="check-in">Check-in date</label>
                            <span onClick={()=> setOpenDate(!openDate)} className='dateFormat'>{`${format(date[0].startDate , "MM/dd/yyyy")}  to  ${format(date[0].endDate , "MM/dd/yyyy")}`}</span>
                            {openDate && <DateRange
                                onChange={(item) => setDate([item.selection])}
                                minDate={new Date()}
                                ranges={date}
                                className="dateChos"
                            />}
                        </div>
                        <div className="listSearchItem">
                            <label htmlFor="check-in">Options</label>
                            <div className="optionsList">
                                <div className="optionsListItem">
                                    <label htmlFor="min-price">Min Price <small> (per night)</small></label>
                                    <input id='min-price' type="number" min={0}  />
                                </div>
                                <div className="optionsListItem">
                                    <label htmlFor="min-price">Max Price<small> (per night)</small></label>
                                    <input id='min-price' type="number" min={0}  />
                                </div>
                                <div className="optionsListItem">
                                    <label htmlFor="min-price">Adult</label>
                                    <input id='min-price' type="number" min={1} />
                                </div>
                                <div className="optionsListItem">
                                    <label htmlFor="min-price">Children</label>
                                    <input id='min-price' type="number"  min={0}  />
                                </div>
                                <div className="optionsListItem">
                                    <label htmlFor="min-price">Room</label>
                                    <input id='min-price' type="number"  min={1}  />
                                </div>
                            </div>
                        </div>
                        <button className='searchButton'>Search</button>
                    </div>
                    <div className="listResult">
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                    </div>
                
                
                </div>
            </div>

        </>
    )
}
