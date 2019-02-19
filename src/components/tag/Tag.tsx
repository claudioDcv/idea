import * as React from 'react';
import * as PropTypes from 'prop-types';

import './Tag.css';

import TarjetaScotiaGif from '../../assets/tarjeta-scotia.gif';

declare const TagTypes: ["nuevo", "descuento", "oferta", "tarjeta"];
export declare type TagType = (typeof TagTypes)[number];

export interface TagProps {
    type: TagType,
    display: boolean,
    text?: string,
}

export interface TagState {
}

const titles : any = {nuevo: "Nuevo", descuento: "%DCTO", oferta: "Oferta", tarjeta: "" };

export default class Tag extends React.Component<TagProps, TagState> {

    static defaultProps: {
        text: string;
    };

    static propTypes: {
        type: PropTypes.Requireable<"nuevo" | "descuento" | "oferta" | "tarjeta">;
        display: PropTypes.Requireable<boolean>;
    };
    constructor(props: TagProps) {
        super(props);

        this.state = {
        }
    }

    public render() {
        const show = this.props.display ? 'tag-show' : 'tag-hide';
        return (
            <div className={`tag tag-${this.props.type} ${show}`}>
                {titles[this.props.type]}
                {this.props.type == 'tarjeta' && (
                    <span>
                        {this.props.text} <img src={TarjetaScotiaGif} alt=""/>
                    </span>
                )}
            </div>
        );
    }
}
