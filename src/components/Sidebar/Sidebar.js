import React, { Component } from 'react';
import logo from 'assets/img/reactlogo.png';

import { NavLink } from 'react-router-dom';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth
    };
  }
  activeRoute = routeName => {
    return this.props.location.pathname.indexOf(routeName) > -1 ? 'active' : '';
  };

  updateDimensions() {
    this.setState({ width: window.innerWidth });
  }
  componentDidMount() {
    this.activeRoute('/mentor/courses');
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions.bind(this));
  }

  render() {
    const sidebarBackground = {
      backgroundImage: 'url(' + this.props.image + ')'
    };
    return (
      <div
        id="sidebar"
        className="sidebar"
        data-color={this.props.color}
        data-image={this.props.image}
      >
        <div className="sidebar-background" style={sidebarBackground} />
        <div className="logo">
          <a
            href="https://www.creative-tim.com?ref=lbd-sidebar"
            className="simple-text logo-mini"
          >
            <div className="logo-img">
              <img src={logo} alt="logo_image" />
            </div>
          </a>
          <a
            href="https://www.creative-tim.com?ref=lbd-sidebar"
            className="simple-text logo-normal"
          >
            LMS Quizz
          </a>
        </div>
        <div className="sidebar-wrapper">
          <ul className="nav">
            {this.props.routes.map((prop, key) => {
              if (!prop.redirect && prop.layout === '/mentor')
                return (
                  <li
                    className={
                      prop.upgrade
                        ? 'active active-pro'
                        : this.activeRoute(prop.layout + prop.path)
                    }
                    key={key}
                  >
                    <NavLink
                      to={prop.layout + prop.path}
                      className="nav-link"
                      activeClassName="active"
                    >
                      <i className={prop.icon} />
                      <p>{prop.name}</p>
                    </NavLink>
                  </li>
                );
              return null;
            })}
            {/* <li className="active active-pro">
              <a className="nav-link" href="#">
                <i className="pe-7s-news-paper" />
                <p>Create Course</p>
              </a>
            </li>
            <li className="active active-pro">
              <NavLink
                to="mentor/courses"
                className="nav-link"
                activeClassName="active"
              >
                <i className="pe-7s-news-paper" />
                <p>Course</p>
              </NavLink>
            </li>
            <li className={}>
              <NavLink
                to="mentor/courses"
                className="nav-link"
                activeClassName="active"
              >
                <i className="pe-7s-news-paper" />
                <p>Course</p>
              </NavLink>
            </li>
            <li className="active">
              <NavLink
                to="mentor/courses"
                className="nav-link"
                activeClassName="active"
              >
                <i className="pe-7s-news-paper" />
                <p>Course</p>
              </NavLink>
            </li> */}
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
