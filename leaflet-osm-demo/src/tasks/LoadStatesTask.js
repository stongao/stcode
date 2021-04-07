import { features } from "../data/us-states.json";
import legendItems from "../entities/LegendItems";

class LoadStatesTask {
    load = (setState) => {
        const mapStates = features

        for (let i = 0; i < mapStates.length; i++) {
            const mapState = mapStates[i]
            this.#setColor(mapState)
        }

        setState(mapStates)
    };

    #setColor = (mapState) => {
        const legendItem = legendItems.find((legendItem)=> 
            legendItem.isFor(mapState.properties.density)
        );
        mapState.properties.color = legendItem.color;
    }
}

export default LoadStatesTask;