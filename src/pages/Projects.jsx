import React, { Component } from "react";
import ProjectCard from "../components/UI/ProjectCard";
// import Filter from "../components/UI/Filter";
import apiHandler from "../api/apiHandler";
import { Link } from "react-router-dom";
import InfoCard from "../components/UI/InfoCard";
// import { TagBox } from 'react-tag-box'

// const options = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Node.js',
//   'Express',
//   'MongoDB',
//   'Ruby',
//   'Rails',
//   'MySQL',
//   'NoSQL',
//   'PHP',
//   'Python',
//   'C',
//   'C++',
//   'TypeScript',
//   'Vue.js',
//   'Angular',
//   'Java',
//   'Docker',
//   'Azure',
//   'React Native',
//   'Swift',
//   'Redux',
//   'GraphQL',
//   'Android',
//   'Fullstack',
//   'Bootstrap',
//   'Spring',
//   'PostgreSQL',
//   'Agile methodology',
//   'jhipster',
//   'Heroku',
//   'Netlify',
//   'Wordpress',
//   'Ionic',
//   'Firebase',
//   'Meteor.js',
//   'API',
//   'Django',
//   'Git',
//   'Symfony',
//   'Scrum',
//   'Laravel',
//   'Semantic UI',
//   'jQuery',
//   'Figma',
//   'Sketch',
//   'InVision',
//   'Zeplin',
//   'Adobe Photoshop',
//   'Adobe InDesign',
//   'Adobe Illustrator',
//   'Product Design',
//   'User Testing',
//   'UI Design',
//   'UX Design',
//   'Design Thinking',
//   'Service Design',
//   'Logo Design',
//   'Graphic Design',
//   'Print Design',
//   'Workshops',
//   'Wireframing',
//   'Webdesign',
//   'Artistic Direction',
//   'Mobile Design',
//   'Project Management',
//   'Reporting',
//   'Data analytics',
//   'Web analytics',
//   'Product Management',
//   'Design Sprint',
//   'E-commerce',
//   'Go',
// ].map((option) => ({
//   label: option.toLowerCase(),
//   value: option.toLowerCase(),
//   name: option.toLowerCase(),
// }))

// let tagsArray = []
// let skillsArray = []

export class Projects extends Component {
  state = {
    projects: [],
    selectedProjects: [],
    category: [
      "Equality",
      "Poverty",
      "Environment",
      "Animals",
      "Arts",
      "Education",
      "Covid-19",
    ],
    frequency: ["Regular", "Temporary"],
    status: ["Full", "Open", "Completed"],
    selectedCategories: [],
    selectedFrequencies: "All",
    selectedStatus: "All",
    Equality:false,
    Poverty:false,
    Environment:false,
    Animals:false,
    Arts:false,
    Education:false,
    Covid19:false,
    // tags: options,
    // selected: [],
    // skills: [],
  };

  

  componentDidMount() {
    apiHandler
      .getProjects()
      .then((apiResponse) => {
        console.log(apiResponse)
        this.setState({
          projects: apiResponse,
        });
        let key=this.props.location.categoryProps.category
        if(this.props.location.categoryProps.category){
          if(this.props.location.categoryProps.category==="Covid19"){
            this.setState({ selectedCategories:["Covid-19"]})
          }else{
            this.setState({ selectedCategories:[this.props.location.categoryProps.category]})
          }
          
          this.setState({[key]:true})
        }
      })
      .catch((apiError) => {
        console.log(apiError);
      });
  }

  filterCategory = (project) => {
    if (this.state.selectedCategories.length) {
      return this.state.selectedCategories.includes(project.category);
    }
    return true;
  };

  filterStatus = (project) => {
    if (this.state.selectedStatus === "All") {
      return true;
    }
    return this.state.selectedStatus.includes(project.status);
  };

  filterFrequency = (project) => {
    if (this.state.selectedFrequencies === "All") {
      return true;
    }
    return this.state.selectedFrequencies.includes(project.frequency);
  };

  // filterSkills = (project) => {
  //   if (project.skills.length === 0) {
  //     return true;
  //   }else if (this.state.skills.includes(project.skills[0])){
  //     return this.state.skills.includes(project.skills[0]);
  //   }else{
  //     return true
  //   }
    
    
    // else {let condition = ""
    //   for (let i=0; i<project.skills.length; i++){
    //     condition +=  `${this.state.skills.includes(project.skills[i])}&& `
    //   }
    //   // condition = condition.split(" ").splice(condition.length-2,1).join("")
    //   console.log(condition)
    //   if(condition){
    //     return condition
    //     console.log("here")
    //   }
      
    // }
    // return this.state.skills.includes(project.skills[0]);
    // let condition = ""
    //   for (let i=0; i<project.skills.length; i++){
    //     condition +=  `${this.state.skills.includes(project.skills[i])}&& `
    //   }
    //   // condition = condition.split(" ").splice(condition.length-2,1).join("")
    //   console.log(condition)
    //   return condition
  
  

  handleChange = (event) => {
    let categorySelected = this.state.selectedCategories;

    if (event.target.type === "checkbox" && event.target.checked) {
      categorySelected.push(event.target.value);
      let value=event.target.id
      this.setState({[event.target.id]:!this.state[value]})
    } else if (event.target.type === "checkbox" && !event.target.checked) {
      let index = categorySelected.indexOf(event.target.value);
      categorySelected.splice(index, 1);
      let value=event.target.id
      this.setState({[event.target.id]:!this.state[value]})
    }
    const value =
      event.target.type === "checkbox" ? categorySelected : event.target.value;

    const key =
      event.target.name === "category"
        ? "selectedCategories"
        : event.target.name === "frequency"
        ? "selectedFrequencies"
        : event.target.name === "status"
        ? "selectedStatus"
        : event.target.name;

    this.setState({
      [key]: value,
    });

    
  };
  // onSelect = (tag) => {
  //   const newTag = {
  //     label: tag.label,
  //     value: tag.value || tag.label,
  //     name: tag.name || tag.label,
  //   }
  //   tagsArray.push(newTag)
  //   skillsArray.push(tag.name)

  //   this.setState({
  //     selected: tagsArray,
  //     skills: skillsArray,
  //   })
  // }

  // remove = (tag) => {
  //   this.setState({
  //     selected: this.state.selected.filter((t) => t.value !== tag.value),
  //   })
  // }

  render() {
    
    let InfoCardText =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quasi qui alias a eligendi voluptatum accusantium inventore quis reiciendis officiis corrupti possimus repudiandae, labore harum facere nihil incidunt deleniti et illum magnam? Magni dignissimos ea, voluptas et facere porro odio, hic eos voluptatibus iste, optio totam illum pariatur ullam incidunt.";

    let InfoCardImage = "/media/teammates-3.svg";

    if (!this.state.projects) {
      return null;
    }

    let filteredProjects = this.state.projects
      .filter(this.filterCategory)
      .filter(this.filterFrequency)
      .filter(this.filterStatus)
      // .filter(this.filterSkills);;

    return (
      <React.Fragment>
        <InfoCard
          title='In need of digital'
          text={InfoCardText}
          HeroWide={true}
          image={InfoCardImage}
          infoCardColor='paleGreen'
        />
        <div className='Projects'>
          {/* <TextContainer /> */}
          <div className={this.props.className}>
            <form
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              className='Projects__filter '
            >
              <div className='form__group'>
                <p> Category </p>
                <div>
                  <label htmlFor='Covid-19'> Covid - 19 </label>
                  <input type='checkbox' name='category' value='Covid-19' id='Covid19' checked={this.state.Covid19} />
                </div>
                <div>
                  <label htmlFor='Education'> Education </label>
                  <input type='checkbox' name='category' value='Education' id='Education' checked={this.state.Education}/>
                </div>
                <div>
                  <label htmlFor='Arts'> Arts </label>
                  <input type='checkbox' name='category' value='Arts' id='Arts' checked={this.state.Arts}/>
                </div>
                <div>
                  <label htmlFor='Animals'> Animals </label>
                  <input type='checkbox' name='category' value='Animals' id='Animals' checked={this.state.Animals}/>
                </div>
                <div>
                  <label htmlFor='category'> Environment </label>
                  <input type='checkbox' name='category' value='Environment' id='Environment' checked={this.state.Environment}/>
                </div>
                <div>
                  <label htmlFor='category'> Poverty </label>
                  <input type='checkbox' name='category' value='Poverty' id='Poverty' checked={this.state.Poverty}/>
                </div>
                <div>
                  <label htmlFor='category'> Equality </label>
                  <input type='checkbox' name='category' value='Equality' id='Equality' checked={this.state.Equality}/>
                </div>
              </div>
              {/* <div className='form__group'>
                    <label htmlFor='skills'>Your skills</label>
                    <TagBox
                      tags={this.state.tags}
                      selected={this.state.selected}
                      onSelect={this.onSelect}
                      removeTag={this.remove}
                      backspaceDelete={true}
                    />
                  </div> */}
              <div className='form__group'>
                <label htmlFor='frequency'> Frequency </label>
                <select name='frequency'>
                  <option value='All'> All </option>
                  <option value='Regular'> Regular </option>
                  <option value='Temporary'> Temporary </option>
                </select>
              </div>
              <div className='form__group'>
                <label htmlFor='status'> Status </label>
                <select name='status'>
                  <option value='All'> All </option>
                  <option value='Full'> Full </option>
                  <option value='Open'> Open </option>
                  <option value='Completed'> Completed </option>
                </select>
              </div>
            </form>
          </div>
          <div className='Projects__cards'>
            {filteredProjects.map((project, index) => (
              <Link
                className='Projects__links'
                key={index}
                to={`/projects/${this.state.projects[index]._id}`}
              >
                <ProjectCard key={index} index={index} project={project} />
              </Link>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Projects;
