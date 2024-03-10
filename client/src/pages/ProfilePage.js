import React, {useContext, useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import {Context} from "../index";
import UpdateImg from "../components/modals/UpdateImg";

const ProfilePage = () => {
    const {user} = useContext(Context)
    const [imgVisible, setImgVisible] = useState()
    return (
        <Container>
            <Row className={"d-flex mt-3"}>
                <Col md={2} className={"d-flex flex-column"}>
                    {user.allUsers[user.user.id - 1].profile_img ?
                        <Image src={process.env.REACT_APP_API_URL + user.allUsers[user.user.id - 1].profile_img} thumbnail/>
                    :
                        <Image src="https://mpng.hippopng.com/20190221/gw/kisspng-computer-icons-user-profile-clip-art-portable-netw-c-svg-png-icon-free-download-389-86-onlineweb-5c6f7efd8fecb7.6156919015508108775895.jpg" thumbnail/>
                    }
                    <Button
                        variant={"primary"}
                        className={"mt-2"}
                        onClick={() => setImgVisible(true)}
                    > Редактировать фото
                    </Button>
                </Col>
                <Col md={10}>
                    <Card className={"d-flex p-2"}>
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