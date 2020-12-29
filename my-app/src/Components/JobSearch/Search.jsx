import React, { useState } from 'react'
import { getSearchData } from '../../Redux/Search/actions'
import {useDispatch, useSelector} from "react-redux"
export  function Search() {
    const [query, setQuery] = useState("")
    const [location, setLocation] = useState("")
    const dispatch = useDispatch()
    const searched = useSelector(state=>state.search.searched)
    const jobs = useSelector(state=>state.search.jobsById)
    console.log("searched",searched)
    console.log("jobs",jobs)

    const handleSearch=e=>{
        e.preventDefault()
        dispatch(getSearchData({query,location}))


    }
    return (
        <div>
            <form onSubmit={e=>handleSearch(e)} >
                <input 
                    type="text" 
                    name="query" 
                    value={query}
                    onChange = {e=>setQuery(e.target.value)}
                />
                <input 
                    type="text" 
                    name="location" 
                    value={location}
                    onChange = {e=>setLocation(e.target.value)}
                />

                <input 
                    type="submit"
                    value="Search"
                />
            </form>
            <div>
                {
                    searched?.map(item=>{
                        return(
                            <div>

                                <div>{item.jobtitle}</div>
                                <div>{item.formattedLocation}</div>
                                <br/>
                                <br/>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}
