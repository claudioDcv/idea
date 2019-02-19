import * as React from 'react';
import './Points.css';
import Tag from '../tag/Tag';

export interface PointsProps {
    value: number,
    hasTarjeta: boolean,
    extra: React.ReactNode,
}

export interface PointsState {
}

export default class Points extends React.Component<PointsProps, PointsState> {

    static showPoints = (value : number, extra: React.ReactNode) : JSX.Element =>  {
        return <span>{value.toLocaleString()} <small>puntos </small>{extra}</span>
    }

    constructor(props: PointsProps) {
        super(props);

        this.state = {
        }
    }

    public render() {
        const tarjeta = this.props.hasTarjeta ? 'tarjeta' : '';
        return (
            <div className={`card-points card-points-${tarjeta}`}>
                {Points.showPoints(this.props.value, this.props.extra)}
            </div>
        );
    }
}
