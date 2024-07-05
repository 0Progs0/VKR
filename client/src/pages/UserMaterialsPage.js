import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../index";
import {Col, Container, Row} from "react-bootstrap";
import UserMaterialItem from "../components/UserMaterialItem";
import {deleteMaterial, fetchMaterials} from "../components/http/materialAPI";
import {observer} from "mobx-react-lite";

const UserMaterialsPage = observer(() => {
    const {user} = useContext(Context)
    const [usersMaterials, setUsersMaterials] = useState([])

    const materialUpdate = (newMaterial) => {
        setUsersMaterials(usersMaterials.map(m => m.id === newMaterial.id ? newMaterial : m))
    }

    const removeMaterial = (material) => {
        deleteMaterial(material.id).then(data => console.log(data))
        setUsersMaterials(usersMaterials.filter(m => m.id !== material.id))
    }
    useEffect(() => {
        fetchMaterials(user.user.id,null,null,null,null, null, null).then(data => setUsersMaterials(data.rows))
    },[])
    return (
        <Container>
            <Row className={"d-flex justify-content-center"}>
                <Col md={2}/>
                <Col md={10}>
                    {usersMaterials.map(material =>
                        <UserMaterialItem key={material.id} user={user} material={material} materialUpdate={materialUpdate} removeMaterial={removeMaterial}/>
                    )}
                </Col>
            </Row>
        </Container>
    );
});

export default UserMaterialsPage;