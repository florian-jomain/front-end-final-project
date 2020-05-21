import React, { Component } from 'react'

export class ProfileProject extends Component {

    state = {
        user: null,
      }
      componentDidMount() {
        const id = this.props.match.params.id
        
    
        apiHandler
          .getOneHelper(id)
          .then((apiResponse) => {
            this.setState({ user: apiResponse })
          })
          .catch((apiError) => {
            console.log(apiError)
          })
      } 
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default ProfileProject
