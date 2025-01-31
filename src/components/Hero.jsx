import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Nav,
  Tab,
  Form,
  InputGroup,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMotorcycle,
  faShoppingBag,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import heroBanner from "../assets/images/hero-banner.png";

function Hero() {
  return (
    <section className="py-5 overflow-hidden bg-primary" id="home">
      <Container>
        <Row className="d-flex justify-content-center">
          <Col md={5} lg={6} className="order-0 order-md-1 mt-8 mt-md-0">
            <a className="img-landing-banner" href="#!">
              <img className="img-fluid" src={heroBanner} alt="hero-header" />
            </a>
          </Col>
          <Col md={7} lg={6} className="py-8 text-md-start text-center">
            <h1 className="display-1 fs-md-5 fs-lg-6 fs-xl-8 text-light">
              Are you starving?
            </h1>
            <h1 className="text-800 mb-5 fs-4">
              Within a few clicks, find meals that
              <br className="d-none d-xxl-block" />
              are accessible near you
            </h1>
            <div className="card w-xxl-75">
              <div className="card-body">
                <Tab.Container id="tabs" defaultActiveKey="delivery">
                  <Nav variant="tabs" className="nav-tabs" role="tablist">
                    <Nav.Item>
                      <Nav.Link eventKey="delivery" className="mb-3">
                        <FontAwesomeIcon icon={faMotorcycle} className="me-2" />
                        Delivery
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="pickup" className="mb-3">
                        <FontAwesomeIcon
                          icon={faShoppingBag}
                          className="me-2"
                        />
                        Pickup
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content className="mt-3">
                    <Tab.Pane eventKey="delivery">
                      <Form className="row gx-2 gy-2 align-items-center">
                        <div className="col">
                          <InputGroup>
                            <InputGroup.Text className="text-danger">
                              <FontAwesomeIcon icon={faMapMarkerAlt} />
                            </InputGroup.Text>
                            <Form.Control
                              id="inputDelivery"
                              type="text"
                              placeholder="Enter Your Address"
                            />
                          </InputGroup>
                        </div>
                        <div className="d-grid gap-3 col-sm-auto">
                          <Button variant="danger" type="submit">
                            Find Food
                          </Button>
                        </div>
                      </Form>
                    </Tab.Pane>
                    <Tab.Pane eventKey="pickup">
                      <Form className="row gx-4 gy-2 align-items-center">
                        <div className="col">
                          <InputGroup>
                            <InputGroup.Text className="text-danger">
                              <FontAwesomeIcon icon={faMapMarkerAlt} />
                            </InputGroup.Text>
                            <Form.Control
                              id="inputPickup"
                              type="text"
                              placeholder="Enter Your Address"
                            />
                          </InputGroup>
                        </div>
                        <div className="d-grid gap-3 col-sm-auto">
                          <Button variant="danger" type="submit">
                            Find Food
                          </Button>
                        </div>
                      </Form>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
