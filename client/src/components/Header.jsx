import React from 'react';
import All from './All.jsx';
import styles from './css/index.css';

// const Header = () => {
//   return (
//     <div className={styles.header}>
//       <a onClick={e => this.showModal()}>ALL</a>
//     </div>
//   )
// }

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      show: false
    };

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal(e) {
    this.setState({
      show: true
    })
  }

  hideModal(e) {
    this.setState({
      show: false
    })
  }

  render() {
    return (
      <div className={styles.header}>
        <a onClick={e => this.showModal()}>ALL</a>
        <All show={this.state.show} handleClose={this.hideModal}/>
      </div>
    )
  }
}

export default Header;
