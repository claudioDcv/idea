import * as React from 'react';
import { Row, Col } from 'antd';
import { Card, Icon, Avatar, Button } from 'antd';
import Points from '../points/Points';

import Banner01Jpg from '../../assets/banner-01.jpg';
import Banner02Jpg from '../../assets/banner-02.jpg';
import Banner03Jpg from '../../assets/banner-03.jpg';

import { productList, IProduct } from '../../utils/productList';
import { Link } from 'react-router-dom';
import { makeProductUrl } from '../../utils/text';


const { Meta } = Card;
export interface HomeItemsProps {
}

export interface HomeItemsState {
  loadingCards: boolean,
  productList: Array<IProduct>,
}

export default class HomeItems extends React.Component<HomeItemsProps, HomeItemsState> {
  constructor(props: HomeItemsProps) {
    super(props);

    this.state = {
      loadingCards: true,
      productList,
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loadingCards: false })
    }, 1000);
  }

  public render() {
    return (
      <div>

        <Row gutter={20}>
          <Col className="gutter-row text-center" span={6} sm={24} md={24} xs={24}>
            <Card
              bordered
              className="answers-card"
            >
              <Row gutter={20}>
                <div className="container text-center">
                  <h2>¡Canjea tus puntos donde quieras y como quieras!</h2>
                </div>
                <Col className="gutter-row text-center mt-20" span={6} sm={8} md={8} xs={24}>
                  <Icon type="question-circle" style={{ fontSize: '50px' }} />
                  <h3>¿Cómo Acumulo?</h3>
                  <p>En nuestras tiendas, solo dictando tu RUT antes de pagar</p>
                  <Button size="large" className="button-outline-alternative mb-20">Ver más</Button>
                </Col>
                <Col className="gutter-row text-center mt-20" span={6} sm={8} md={8} xs={24}>
                  <Icon type="question-circle" style={{ fontSize: '50px' }} />
                  <h3>¿Cómo Canjeo?</h3>
                  <p>Desde 6.000 puntos en nuestras tiendas y desde 1.500 puntos en nuestra web</p>
                  <Button size="large" className="button-outline-alternative mb-20">Ver más</Button>
                </Col>
                <Col className="gutter-row text-center mt-20" span={6} sm={8} md={8} xs={24}>
                  <Icon type="question-circle" style={{ fontSize: '50px' }} />
                  <h3>¡Canjea tus puntos!</h3>
                  <p>Busca los productos con sello 'Puntos Cencosud' en nuestra tiendas</p>
                  <Button size="large" className="button-outline-alternative mb-20">Ver más</Button>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>

        <div className="mt-20 container text-center">
          <h2>Productos destacados</h2>
        </div>

        <Row gutter={20}>
          {this.state.productList.map(e => (
            <Col key={e.id} className="gutter-row mb-20 text-center" span={6} lg={6} md={6} sm={8} xs={24}>
              <Card
                className="product-card"
                bordered
                hoverable
                loading={this.state.loadingCards}
                cover={<img alt="example" src={e.image} />}
              >
                <Meta
                  title={e.title}
                  description={e.description}
                />

                <div className="card-footer">
                  <Points value={e.points} />
                  <Link to={`/producto/${makeProductUrl(e.id, e.title)}`}><Button block size="large" className="button-outline-primary">¡Lo Quiero!</Button></Link>
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="text-center mb-40">
          <Button size="large" type="primary" className="button-secondary">Ir a catálogo completo</Button>
        </div>

        <Row gutter={20} className="mt-20">
          <Col className="gutter-row mb-20 text-center" span={6} sm={12} md={12} xs={24}>
            <Card
              bordered
              hoverable
              className="card-link-to"
            >
              <h3>Catálogo de canjes Web</h3>
              <p>desde 1.500 puntos</p>
              <Button size="large" className="button-outline-primary">Ver más</Button>
            </Card>
          </Col>
          <Col className="gutter-row mb-20 text-center" span={6} sm={12} md={12} xs={24}>
            <Card
              bordered
              hoverable
              className="card-link-to"
            >
              <h3>Catálogo de canjes en Sala</h3>
              <p>desde 6.000 puntos</p>
              <Button size="large" className="button-outline-primary">Ver más</Button>
            </Card>
          </Col>
        </Row>

        <Row gutter={20}>
          <Col className="gutter-row mb-20 text-center" span={6} sm={24} md={24} xs={24}>
            <Card
              bordered
              hoverable
              className="bg-img-cover banner-full"
              style={{
                backgroundImage: `url(${Banner01Jpg})`,
              }}
            >

            </Card>
          </Col>
        </Row>

        <Row gutter={20}>
          <Col className="gutter-row mb-40 text-center" span={6} sm={12} md={12} xs={24}>
            <Card
              bordered
              hoverable
              className="bg-img-cover banner-middle"
              style={{
                backgroundImage: `url(${Banner02Jpg})`,
              }}
            >
            </Card>
          </Col>
          <Col className="gutter-row mb-40 text-center" span={6} sm={12} md={12} xs={24}>
            <Card
              bordered
              hoverable
              className="bg-img-cover banner-middle"
              style={{
                backgroundImage: `url(${Banner03Jpg})`,
              }}
            >
            </Card>
          </Col>
        </Row>

        <Row gutter={20}>
          <Col className="gutter-row text-center mb-40" span={6} sm={24} md={24} xs={24}>
            <Card
              bordered
              hoverable
              className="contact-card"
            >
              <Row gutter={20}>
                <div className="container text-center">
                  <h2><strong>Servicios al cliente,</strong> estamos atentos a tus consultas, solicitudes o comentarios</h2>
                </div>
                <Col className="gutter-row text-center mt-20" span={6} sm={8} md={8} xs={24}>
                  <Icon type="question-circle" style={{ fontSize: '50px' }} />
                  <p>¡Llamanos al <strong>600 360 4000</strong>!</p>
                </Col>
                <Col className="gutter-row text-center mt-20" span={6} sm={8} md={8} xs={24}>
                  <Icon type="question-circle" style={{ fontSize: '50px' }} />
                  <p>¡Chatea con nosotros!</p>
                </Col>
                <Col className="gutter-row text-center mt-20" span={6} sm={8} md={8} xs={24}>
                  <Icon type="mail" style={{ fontSize: '50px' }} />
                  <p>¡Envianos tus consultas!</p>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>

      </div>
    );
  }
}
