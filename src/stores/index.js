import { configure } from "mobx";
import ProjectStore from "./ProjectStore";
import UiStore from "./UiStore";

configure({ enforceActions: "observed" });
class RootStore { 
    constructor() {
        this.projectStore = new ProjectStore(this);
        this.uiStore = new UiStore(this);
    }
    
    loadAllData = async () => {
        await this.projectStore.loadAllProjects();
    }

}

export default RootStore;