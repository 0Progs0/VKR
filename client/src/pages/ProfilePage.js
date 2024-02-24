import React, {useContext} from 'react';
import {Card, Col, Container, Image, Row} from "react-bootstrap";
import {Context} from "../index";

const ProfilePage = () => {
    const {user} = useContext(Context)

    return (
        <Container>
            <Row className={"d-flex mt-3"}>
                <Col md={2}>
                    <Image src="https://sun9-26.userapi.com/impg/zblbzn0DDLjYUn23kH4gxKoggF5ZrcaYXcpp0g/_L1h_-mzxrQ.jpg?size=240x240&quality=96&sign=75e27091bf4a09f67cff4865d8b73ec6&type=album" thumbnail/>
                </Col>
                <Col md={10}>
                    <Card className={"d-flex p-1"}>
                        <div>Имя: {user.user.name}</div>
                        <div>Адрес электроннной почты: {user.user.email}</div>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ProfilePage;