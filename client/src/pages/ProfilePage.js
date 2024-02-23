import React, {useContext} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import {Context} from "../index";
import {jwtDecode} from "jwt-decode";

const ProfilePage = () => {
    const user = jwtDecode(localStorage.getItem('token'))

    return (
        <Container>
            <Row className={"d-flex mt-3"}>
                <Col md={4}>

                </Col>
                <Col md={8}>
                    <Card className={"d-flex"}>
                        <div>Имя: {user.name}</div>
                        <div>Адрес электроннной почты: {user.email}</div>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ProfilePage;