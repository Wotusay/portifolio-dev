import { decorate, observable, action } from "mobx";
import RestService from "../services/RestService";
import Project from "../models/project";

class ProjectStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.projects = [];
        this.projectService = new RestService('projects');
    }

    loadAllProjects = async () => {
        const jsonProjects = await this.projectService.getAll();
        jsonProjects.forEach(json => this.updateProjectFromServer(json));
      };
    
      addProject = project => {
        this.projects.push(project);
      };
    
      createProject = async project => {
        const json = await this.projectService.create(project);
        this.updateProjectFromServer(json);
      };
    
      updateProject = async project => {
        const json = await this.projectService.update(project);
        this.updateProjectFromServer(json);
      };
    
      deleteProject = async project => {
        const json = await this.projectService.delete(project);
        this.updateProjectFromServer(json);
      };
    
      updateProjectFromServer(json) {
        let project = this.projects.find(project => project.id === json.id);
        if (!project) {
          project = new Project({
            id: json.id,
            store: this
          });
        }
        if (json.isDeleted) {
          this.projects.remove(project);
        } else {
          project.updateFromJson(json);
        }
      }
    
      resolveProject = id => this.projects.find(project => project.id === id);
}

decorate(ProjectStore, {
    projects: observable,
    addProject: action,
    updateProjectFromServer: action
  });

export default ProjectStore;