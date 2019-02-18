import * as React from 'react';
import Top from './Top';
import Bottom from './Bottom';
import './Menu.css';
import ResponsiveAccess from './ResponsiveAccess';
import SearchBar from './SearchBar';

export interface MainProps {
}

export interface MainState {
}

export default class Main extends React.Component<MainProps, MainState> {
  constructor(props: MainProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
    return (
      <div className="menu">
        <Top />
        <Bottom />
        <ResponsiveAccess />
        <SearchBar />
      </div>
    );
  }
}
