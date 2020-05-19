import React, { Component } from 'react'

export class Filter extends Component {

  
  state = {
    data: this.props.data,
    category:"",
    frequency:"",
    status:"",
  }

  // componentDidMount(){
  //   console.log(this.props.data)
  // }
  render() {
    console.log(this.state.data)
    return (
      <React.Fragment>
      <div className={this.props.className}>
        <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
        <div className='form__group'>
            <p>Category</p>
            <div>
            <label htmlFor='Covid-19'>Covid-19</label>
            <input type="checkbox" name="Covid-19"/>
            </div>
            <div>
            <label htmlFor='Education'>Education</label>
            <input type="checkbox" name="Education"/>
            </div>
            <div>
            <label htmlFor='Arts'>Arts</label>
            <input type="checkbox" name="Arts"/>
            </div>
            <div>
            <label htmlFor='Animals'>Animals</label>
            <input type="checkbox" name="Animals"/>
            </div>
            <div>
             <label htmlFor='category'>Category</label>
            <input type="checkbox" name="Covid-19"/>
            </div>
             <div>
             <label htmlFor='category'>Category</label>
            <input type="checkbox" name="Covid-19"/>
             </div>
             <div>
             <label htmlFor='category'>Category</label>
            <input type="checkbox" name="Covid-19"/>
             </div>
            {/* <select multiple={true} name='category'>
              <option value='Covid-19'>Covid-19</option>
              <option value='Education'>Education</option>
              <option value='Arts'>Arts</option>
              <option value='Animals'>Animals</option>
              <option value='Environment'>Environment</option>
              <option value='Poverty'>Poverty</option>
              <option value='Equality'>Equality</option>
            </select> */}
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
            <label htmlFor='frequency'>Frequency</label>
            <select name='frequency'>
              <option value='Regular'>Regular</option>
              <option value='Temporary'>Temporary</option>
            </select>
          </div>
          <div className='form__group'>
            <label htmlFor='status'>Status</label>
            <select name='status'>
              <option value='Full'>Full</option>
              <option value='Open'>Open</option>
              <option value='Completed'>Completed</option>
            </select>
          </div>
        </form>
      </div>
    </React.Fragment>
    )
  }
}

export default Filter
