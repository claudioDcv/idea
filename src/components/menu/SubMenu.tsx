import * as React from 'react';

export interface SubMenuProps {
    children: String | React.ReactNode,
}

export interface SubMenuState {
}

export default class SubMenu extends React.Component<SubMenuProps, SubMenuState> {
    constructor(props: SubMenuProps) {
        super(props);

        this.state = {
        }
    }

    public render() {
        return (
            <ul className="menu-submenu">
                {this.props.children}
            </ul>
        );
    }
}
