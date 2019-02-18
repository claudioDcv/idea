import * as React from 'react';
import { Input } from 'antd';

const Search = Input.Search

export interface SearchBarProps {
}

export interface SearchBarState {
}

export default class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
    constructor(props: SearchBarProps) {
        super(props);

        this.state = {
        }
    }

    public render() {
        return (
            <div className="menu-responsive-search-bar">
                <Search
                    placeholder="¿Que estas buscando?"
                    onSearch={value => console.log(value)}
                    enterButton
                    size="large"
                />
            </div>
        );
    }
}
