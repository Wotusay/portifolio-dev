import { v4 } from "uuid";
import { decorate, action, computed } from "mobx";


class Project {
    constructor({id = v4(), store, ...json }) {
        this.id = id; 
        if (!store) {
            throw new Error("voorzie een store");
          }
        this.store = store;
        this.updateFromJson(json);
        this.store.addProject(this);
    }

    update = async () => this.store.updateProject(this.asJson);
    create = async () => this.store.createProject(this.asJson);
    delete = async () => await this.store.deleteProject(this.asJson);


    updateFromJson = ({ url, date, image, detail, utitlies, collab, title }) => {
        this.url = url; 
        this.date = date;
        this.image = image;
        this.detail = detail;
        this.utitlies = utitlies;
        this.collab = collab;
        this.title = title;
      };


      get asJson() {
        return {
          id: this.id,
          url: this.url,
          date: this.date,
          image: this.image,
          detail: this.detail,
          utitlies: this.utitlies,
          collab: this.collab,
          title: this.title
        };
      }

}


decorate(Project, {
    updateFromJson: action,
    asJson: computed
  });

export default Project;