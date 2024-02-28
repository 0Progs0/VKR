import React, {useContext, useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import {Context} from "../index";
import UpdateImg from "../components/modals/UpdateImg";
import {fetchUsers} from "../components/http/userAPI";

const ProfilePage = () => {
    const {user} = useContext(Context)
    const [imgVisible, setImgVisible] = useState()
    return (
        <Container>
            <Row className={"d-flex mt-3"}>
                <Col md={2}>
                    {user.profile_img ?
                        <Image src={process.env.REACT_APP_API_URL + user.allUsers[user.user.id - 1].profile_img} thumbnail/>
                    :
                        <Image src="../assets/profile_mock.jpg" thumbnail/>
                    }
                    <Button
                        variant={"primary"}
                        className={"mt-2"}
                        onClick={() => setImgVisible(true)}
                    > Редактировать фото
                    </Button>
                </Col>
                <Col md={10}>
                    <Card className={"d-flex p-1"}>
                        <div>Имя: {user.user.name}</div>
                        <div>Адрес электроннной почты: {user.user.email}</div>
                    </Card>
                </Col>
            </Row>
            <UpdateImg show={imgVisible} onHide={() => setImgVisible(false)}/>
        </Container>
    );
};

export default ProfilePage;