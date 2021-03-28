import React from 'react'
import { connect } from 'react-redux'

import Modal from '../modal/modal'

class Homepage extends React.Component {
  constructor(props){
    super(props)
  }
  
  render() {
    return (
      <div className='homepage-container'>
        {this.props.state.session.id ? null : <Modal />}
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {state: state}
};


export default connect(mapStateToProps, null)(Homepage)