import * as React from 'react';

import MenuSvg from '../../assets/menu.svg';
import ProfileSvg from '../../assets/profile.svg';

export interface ResponsiveAccessProps {
}

export interface ResponsiveAccessState {
}

export default class ResponsiveAccess extends React.Component<ResponsiveAccessProps, ResponsiveAccessState> {
  constructor(props: ResponsiveAccessProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
    return (
      <div className="menu-responsive-access">
        <button className="menu-responsive-button">
            <img src={ProfileSvg} alt="" />
        </button>
        <button className="menu-responsive-button menu-responsive-toggle">
            <img src={MenuSvg} alt="" />
        </button>
      </div>
    );
  }
}
