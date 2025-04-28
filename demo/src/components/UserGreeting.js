import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            isLoggedIn: true
        }
    }
  render() {
    return this.state.isLoggedIn && <div>Welcome doan tin</div>
    // return (
    //     this.state.isLoggedIn ? (
    //         <div>Welcome doan tin</div> 
    //     ): (
    //         <div>Welcome guest </div>
    //     )

    // )
    // let message 
    // if (this.state.isLoggedIn) {
    //     message = <div>Welcome doan tin</div>
    // }
    // else {
    //     message = <div>Welcome guest</div>
    // }
    // return <div>{message}</div>
    //  if (this.state.isLoggedIn) {
    //     return (
    //         <div>Welcome doan tin</div>
    //     )
    //  } else {
    //     return <div>Welcome guest</div>
    //  }
    // return (
    //   <div>
    //    <div>Welcome doan tin</div>
    //    <div>Welcome guest</div>
    //   </div>
    // )
    
  }
}

export default UserGreeting