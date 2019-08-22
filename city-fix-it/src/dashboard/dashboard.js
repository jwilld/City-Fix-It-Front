import React, { Component } from "react";
import './dashboard.css'
import {Link} from 'react-router-dom'


class Dashboard extends Component {
  render() {
    return (
      <div className='dashboard'>
        <div className='dash-grid'> 
          <div className='dash-menu'>
            <header className='dash-header'>Dashboard</header>
            <div className ='dash-menu-items'>
              <Link className = 'dash-link' to='/main/ticket-search'>
            <ul>View Tickets</ul>

              </Link>
              <Link className = 'dash-link' to='/main/create/'>

            <ul>Create Ticket</ul>
              </Link>

          


            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard