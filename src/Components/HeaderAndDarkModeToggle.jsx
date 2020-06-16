import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from 'react-bootstrap/Form'
import '../Css/AppContainer.css';

class HeaderAndDarkModeToggle extends Component {
    render() {
        return (
            <div className={'headerAndDarkModeToggle'  + ` ${this.props.theme}`}>
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={6}>
                            <h1> Social Media Dashboard </h1>
                            <p> Total Followers: 668,566</p>


                        </Col>
                        <Col xs={12} sm={12} md={6}>
                            <Container className={'darkModeToggleColumn'  + ` ${this.props.theme}`}>
                                <Row>
                                    <Col xs={0} sm={0} md={6}>



                                    </Col>
                                    <Col className={'darkModeText'  + ` ${this.props.theme}`} xs={6} sm={6} md={3}>
                                        <p> Light Mode </p>

                                    </Col>
                                    <Col  className={'darkModeToggle'  + ` ${this.props.theme}`} xs={6} sm={6} md={3}>
                                        <Form className={'darkModeToggleContainer'}>
                                            <Form.Check
                                                onClick={this.props.toggleDarkMode}
                                                type="switch"
                                                id="custom-switch"
                                                label=""

                                            />
                                        </Form>
                                    </Col>
                                </Row>
                            </Container>


                        </Col>
                    </Row>
                </Container>

            </div>
        );
    }
}

HeaderAndDarkModeToggle.propTypes = {};

export default HeaderAndDarkModeToggle;
