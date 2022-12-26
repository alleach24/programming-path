import React, { useState, useEffect } from "react";
import MainNavbar from "./MainNavbar";
import Plan from "./Plan"
import PlanEdit from "./PlanEdit"


export default function PathPage() {
    const [planList, setPlanList] = useState([]);
    const [addNewPlan, setAddNewPlan] = useState(false);

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
            <button onClick={()=>setAddNewPlan(true)}>Add new plan</button>
            {addNewPlan && (
                <div id="pop-up">
                    <PlanEdit newPlan="new"/>
                    <button onClick={()=>setAddNewPlan(false)}>Cancel</button>
                </div>
            )}


            <div id="timeline">
                {/* do sorting and mapping in one function outside the html */}
                {planList.sort((a,b) => (a.start_time > b.start_time ? 1 : ((b.start_time > a.start_time) ? -1 : 0))).map((data) => {
                    return (
                        <div>
                        <Plan id={data.id} title={data.title} description={data.description} startTime={data.start_time} endTime={data.end_time} />
                        <div class="vertical"></div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

