import React, { Component } from 'react';
import Sidebar from '../components/sidebar/sidebar';
import Breadcrumbs from '../components/breadcrumbs/breadcrumbs';

class Meetupspage extends Component {
  render() {
    return (
      <div className="Meetupapp">
        <Sidebar />
        <Breadcrumbs />
      </div>
    );
  }
}

export default Meetupspage;
