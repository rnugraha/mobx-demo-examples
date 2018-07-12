import { observable, action } from "mobx";
import { configure } from "mobx";

configure({ enforceActions: "strict" });

// async
function fetchGithubProjectsSomehow() {
  return Promise.resolve([1, 2, 3]);
}

function somePreprocessing(projects) {
  return projects;
}

class Store {
  @observable githubProjects = [];
  @observable state = "pending"; // "pending" / "done" / "error"

  @action
  fetchProjects() {
    this.githubProjects = [];
    this.state = "pending";
    fetchGithubProjectsSomehow().then(
      this.fetchProjectsSuccess,
      this.fetchProjectsError
    );
  }

  @action.bound
  fetchProjectsSuccess(projects) {
    const filteredProjects = somePreprocessing(projects);
    this.githubProjects = filteredProjects;
    this.state = "done";
    console.log(filteredProjects);
    console.log(this);
  }

  @action.bound
  fetchProjectsError(error) {
    this.state = "error";
  }
}

let myStore = new Store();
myStore.fetchProjects();
