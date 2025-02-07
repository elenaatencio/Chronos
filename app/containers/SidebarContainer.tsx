import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import ListIcon from '@material-ui/icons/List';
import InfoIcon from '@material-ui/icons/Info';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import SettingsIcon from '@material-ui/icons/Settings';

import '../stylesheets/SidebarContainer.scss';
import { ApplicationContext } from '../context/ApplicationContext';
import { AwsContext } from '../context/AwsContext';

const SidebarContainer = React.memo(props => {
  const { intervalID } = useContext(ApplicationContext);
  const { isLoading, setLoadingState } = useContext(AwsContext);

  // clear interval and set loading state to true when leaving graph containers
  const handleClick = () => {
    if(intervalID) clearInterval(intervalID);
    if(!isLoading) setLoadingState(true);
  }

  return (
    <div className="sidebar-container" id="mySidebar">
      <div className="sidebar">
        <div className="firstRow">
          <span>
            <img alt="C" id="C" src="../assets/C.svg" />
          </span>
          <span>
            <img alt="Chronos" id="logo" src="../assets/logo.svg" />
          </span>
        </div>
        <hr className="line" id="firstLine" />
        <div className="thirdRow">
          <Link className="sidebar-link" to="/" id="dash" onClick={handleClick}>
            <ListIcon
              style={{
                WebkitBoxSizing: 'content-box',
                boxShadow: 'none',
                width: '35px',
                height: '35px',
              }}
            />
            &emsp;Dashboard
          </Link>
          <Link className="sidebar-link" to="/settings" id="settings" onClick={handleClick}>
            <SettingsIcon
              style={{
                WebkitBoxSizing: 'content-box',
                boxShadow: 'none',
                width: '35px',
                height: '35px',
              }}
            />
            &emsp;Settings
          </Link>
          <Link className="sidebar-link" to="/about" id="about" onClick={handleClick}>
            <InfoIcon
              style={{
                WebkitBoxSizing: 'content-box',
                boxShadow: 'none',
                width: '35px',
                height: '35px',
              }}
            />
            &emsp;About
          </Link>
          <Link className="sidebar-link" to="/contact" id="contact" onClick={handleClick}>
            <ContactSupportIcon
              style={{
                WebkitBoxSizing: 'content-box',
                boxShadow: 'none',
                width: '35px',
                height: '35px',
              }}
            />
            &emsp;Contact
          </Link>
        </div>
      </div>
    </div>
  )
});

export default SidebarContainer;
