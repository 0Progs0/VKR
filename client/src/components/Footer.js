import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

const Footer = () => {
    return (
        <footer className="bg-primary pt-2" style={{position: "absolute", left:0, bottom:0, right:0}}>
            <Container>
                <Row>
                    <Col>
                        <p className="text-light text-center">© 2024 Alexey Zimenkov. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;