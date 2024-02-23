import React, {useContext, useEffect, useState} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {useParams} from 'react-router-dom'
import {fetchCategories, fetchGroups, fetchOneMaterial, fetchSubjects} from "../components/http/materialAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const MaterialPage = observer(() => {
    const [currentMaterial, setCurrentMaterial] = useState({})
    const {id} = useParams()
    const {material} = useContext(Context)
    useEffect(() => {
            fetchOneMaterial(id).then(data => setCurrentMaterial(data))
            fetchSubjects().then(data => material.setSubjects(data))
            fetchCategories().then(data => material.setCategories(data))
            fetchGroups().then(data => material.setGroups(data))
            }
    ,[])
    return (
        <Container>
            <Row><h3>{currentMaterial.title}</h3></Row>
            <Row>
                <Col className={"d-flex"}>
                <Card className={"me-1 p-1"}>{material.categories[currentMaterial.categoryId - 1]?.title}</Card>
                <Card className={"me-1 p-1"}>{material.groups[currentMaterial.groupId - 1]?.title}</Card>
            </Col>
            </Row>
            <Row className={"d-flex mt-3"}>
                <Col md={8}>
                    <embed src={process.env.REACT_APP_API_URL + currentMaterial.file + "#zoom=85&scrollbar=0&toolbar=0&navpanes=0"} style={{width:850, height:650}}/>
                </Col>
                <Col md={4}>
                    <Card className={"d-flex flex-column"} style={{width:300, height:200}}>
                        <div className={"ms-2 p-2"}>{currentMaterial.description}</div>
                        <div className={"ms-2 p-2"}><Button variant={"primary"}>Скачать</Button></div>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
});

export default MaterialPage;