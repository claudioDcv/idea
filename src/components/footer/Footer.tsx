import React from 'react';
import { Button, Layout, Row, Col, List, Icon } from 'antd';
import LogoPng from '../../assets/logo.png';

const unds: Array<string> = [
    'Jumbo',
    'Paris',
    'Santa Isabel',
    'Jhonson',
    'Easy',
    'Tarjetas Cencosud Scotiabank',
    'Umbrale',
];

const conocenos: Array<string> = [
    'Términos y Condiciones',
    'Póliticas de Privacidad',
    'Tiendas Asociadas',
    'Contacto',
];

export interface FooterProps {
}

export interface FooterState {
}

export default class Footer extends React.Component<FooterProps, FooterState> {
    constructor(props: FooterProps) {
        super(props);

        this.state = {
        }
    }

    public render() {
        return (
            <Layout.Footer>
                <div className="container">
                    <Row gutter={20}>
                        <Col className="gutter-row mb-20" span={6} sm={3} md={3} xs={24}>
                            <img src={LogoPng} alt="" className="menu-logo" />
                        </Col>
                        <Col className="gutter-row mb-20" span={6} sm={7} md={7} xs={24}>
                            <List
                                size="small"
                                header={<div>¿Dónde acumular y canjear?</div>}
                                dataSource={unds}
                                renderItem={(item: string) => (<List.Item>{item}</List.Item>)}
                            />
                        </Col>
                        <Col className="gutter-row mb-20" span={6} sm={7} md={7} xs={24}>
                            <List
                                size="small"
                                header={<div>Conócenos</div>}
                                dataSource={conocenos}
                                renderItem={(item: string) => (<List.Item>{item}</List.Item>)}
                            />
                        </Col>
                        <Col className="gutter-row mb-20" span={6} sm={7} md={7} xs={24}>
                            <div className="social-links">
                                <div className="social-links-header">Síguenos</div>
                            </div>
                            <div className="social-links-list">
                                <Icon type="facebook" />
                                <Icon type="twitter" />
                                <Icon type="youtube" />
                                <Icon type="instagram" />
                            </div>

                            <div className="social-links">
                                <div className="social-links-header">¡Canjea Ya!</div>
                            </div>
                            <div className="social-links-list">
                                <Button type="primary" className="button-secondary">¡Inscríbete!</Button>
                            </div>
                        </Col>
                    </Row>

                    <div className="separator" />

                    <Row gutter={20}>
                        <Col className="gutter-row mt-20 text-center" span={6} sm={24} md={24} xs={24}>
                            Todos los derechos reservados Puntos Cencosud 2019
                        </Col>
                    </Row>

                </div>
            </Layout.Footer>
        );
    }
}
