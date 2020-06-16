import React, {Component} from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import '../Css/AppContainer.css';
import facebookIcon from '../Images/icon-facebook.svg';
import twitterIcon from '../Images/icon-twitter.svg';
import instaIcon from '../Images/icon-instagram.svg';
import youtubeIcon from '../Images/icon-youtube.svg';
import upIcon from '../Images/icon-up.svg';
import downIcon from '../Images/icon-down.svg';

class FollowerCountColumns extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col xs={12} sm={6} md={3}>
                            <div className={'followerCounter facebookFollowerColumn ' + ` ${this.props.theme}`}>
                                <p className={'accountName' + ` ${this.props.theme}`}><img src={facebookIcon} alt={'FacebookIcon'}/> @BBC NEWS
                                </p>
                                <h1> 100,987 </h1>
                                <p className={'followerCounterSubheading' + ` ${this.props.theme}`}> Followers</p>
                                <p className={'followerUpdate increase' + ` ${this.props.theme}`}><img src={upIcon} alt={'upIcon'}/> 258
                                    Today</p>
                            </div>

                        </Col>
                        <Col xs={12} sm={6} md={3}>
                            <div className={'followerCounter twitterFollowerColumn' + ` ${this.props.theme}`}>
                                <p className={'accountName' + ` ${this.props.theme}`}><img src={twitterIcon} alt={'twitterIcon'}/> @BBC NEWS
                                </p>
                                <h1> 109,087 </h1>
                                <p className={'followerCounterSubheading' + ` ${this.props.theme}`}> Followers</p>
                                <p className={'followerUpdate increase' + ` ${this.props.theme}`}><img src={upIcon} alt={'upIcon'}/> 99
                                    Today</p>
                            </div>


                        </Col>
                        <Col xs={12} sm={6} md={3}>
                            <div className={'followerCounter instagramFollowerColumn' + ` ${this.props.theme}`}>
                                <p className={'accountName' + ` ${this.props.theme}`}><img src={youtubeIcon} alt={'youtubeIcon'}/> @BBC NEWS
                                </p>
                                <h1> 450,253 </h1>
                                <p className={'followerCounterSubheading' + ` ${this.props.theme}`}> Followers </p>
                                <p className={'followerUpdate increase' + ` ${this.props.theme}`}><img
                                    src={upIcon} alt={'upIcon'}/> 1,099 Today</p>


                            </div>


                        </Col>
                        <Col xs={12} sm={6} md={3}>
                            <div className={'followerCounter youtubeFollowerColumn' + ` ${this.props.theme}`}>
                                <p className={'accountName' + ` ${this.props.theme}`}><img src={instaIcon} alt={'instaIcon'}/> @BBC NEWS</p>
                                <h1> 8,239 </h1>
                                <p className={'followerCounterSubheading' + ` ${this.props.theme}`}> Subscribers </p>
                                <p className={'followerUpdate decrease' + ` ${this.props.theme}`}><img
                                    src={downIcon} alt={'downIcon'}/> 75 Today</p>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </div>
        );
    }
}

FollowerCountColumns.propTypes = {};

export default FollowerCountColumns;
