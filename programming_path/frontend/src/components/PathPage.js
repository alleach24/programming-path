import React, { useState, useEffect } from "react";
import MainNavbar from "./MainNavbar";
import Plan from "./Plan"


export default function PathPage() {
    const [planList, setPlanList] = useState([]);

    useEffect(() => {
        getData()
    }, []);
    
    const getData = async () => {
        const response = await fetch('/api/get-plan-list')
        setPlanList(await response.json());
        console.log(response.body)
    }


    return (
        <div>
            <MainNavbar />
            <h1>My Path</h1>
            <a href="/plan/edit/new"><button>Add new plan</button></a>

            <div class="timeline">

            {planList.sort((a,b) => (a.start_time > b.start_time ? 1 : ((b.start_time > a.start_time) ? -1 : 0))).map((data) => {
                return (
                    <div class="container timeline-container">
                        <Plan id={data.id} title={data.title} description={data.description} startTime={data.start_time} endTime={data.end_time} />
                    </div>
                )
            })}

            </div>


        </div>
    )
}

