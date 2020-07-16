import React, { Component } from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import Images from '../../Containers/Images/Images';



class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    return (
      <div className="header-bgd-color">
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a class="navbar-brand" href="/"><img className='swall-Img' src={Images.path.swallLogo} /></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
              <li class="nav-item">
                <a class="nav-link bold-header" href="/page">LEDGER LOG <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link bold-header" href="#">PUBLIC LEDGER</a>
              </li>
              <li class="nav-item">
                <a class="nav-link border-swall" href="#"><img className="header-swall" src={Images.path.swal} /></a>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <i class="fa fa-search search-shft"></i>
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            </form>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class='fas fa-bell'></i>
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#"><i class="fa fa-bars"></i></a>
            </li>
          </div>
        </nav>
      </div>

    );

  }
}


export default Header;