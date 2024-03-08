import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../index";
import {Col, Container, Row} from "react-bootstrap";
import UserMaterialItem from "../components/UserMaterialItem";
import {fetchMaterials} from "../components/http/materialAPI";

const UserMaterialsPage = () => {
    const {user} = useContext(Context)
    const [usersMaterials, setUsersMaterials] = useState([])

    useEffect(() => {
        fetchMaterials(user.user.id,null,null,null,null, null).then(data => setUsersMaterials(data.rows))
    },[])
    return (
        <Container>
            <Row className={"d-flex justify-content-center"}>
                <Col md={2}/>
                <Col md={10}>
                    {usersMaterials.map(material =>
                        <UserMaterialItem key={material.id} user={user} material={material}/>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default UserMaterialsPage;