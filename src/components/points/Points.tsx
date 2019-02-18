import * as React from 'react';
import './Points.css';

export interface PointsProps {
    value: number,
}

export interface PointsState {
}

export default class Points extends React.Component<PointsProps, PointsState> {

    static showPoints = (value : number) : JSX.Element =>  {
        return <span>{value.toLocaleString()} <small>puntos</small></span>
    }

    constructor(props: PointsProps) {
        super(props);

        this.state = {
        }
    }

    public render() {
        return (
            <div className="card-points">
                {Points.showPoints(this.props.value)}
            </div>
        );
    }
}
