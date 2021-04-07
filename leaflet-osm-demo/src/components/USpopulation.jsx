import React, {useState, useEffect} from 'react';
import Loading from "./Loading";
import USmap from "./USmap";
import Legend from "./Legend"
import LoadStatesTask from '../tasks/LoadStatesTask';
import legendItems from "../entities/LegendItems";

const USpopulation = () => {
    const [states, setStates] = useState([]);
    const legendItemsInReverse = [...legendItems].reverse();
    const load = () => {
        const loadStatesTask = new LoadStatesTask();
        loadStatesTask.load(setStates);
    }

    useEffect(load, []);

    return <div> {
        states.length === 0 ? <Loading/>: <div><USmap states={states}/><Legend legendItems={legendItemsInReverse}/></div>
    } </div>
}

export default USpopulation;
