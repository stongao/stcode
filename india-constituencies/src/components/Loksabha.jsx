import React, {useState, useEffect} from 'react';
import Loading from "./Loading";
import LoksabhaMap from "./LoksabhaMap";
import Legend from "./Legend"
import LoadStatesTask from '../tasks/LoadStatesTask';
import legendItems from "../entities/LegendItems";

const Loksabha = () => {
    const [states, setStates] = useState([]);
    //const legendItemsInReverse = [...legendItems].reverse();
    const load = () => {
        const loadStatesTask = new LoadStatesTask();
        loadStatesTask.load(setStates);
    }

    useEffect(load, []);

    return <div> {
        states.length === 0 ? <Loading/>: <div><LoksabhaMap states={states}/></div>
    } </div>
}

export default Loksabha;
