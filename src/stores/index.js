import { configure } from "mobx";
import ProjectStore from "./ProjectStore";

configure({ enforceActions: "observed" });
class RootStore { 
    constructor() {
        this.projectStore = new ProjectStore(this);
    }
    
    loadAllData = async () => {
        await this.projectStore.loadAllProjects();
    }

}

export default RootStore;