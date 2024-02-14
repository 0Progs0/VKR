import React, {useContext, useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import SubjectBar from "../components/SubjectBar";
import GroupBar from "../components/GroupBar";
import CategoryBar from "../components/CategoryBar";
import MaterialList from "../components/MaterialList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchCategories, fetchGroups, fetchMaterials, fetchSubjects} from "../components/http/materialAPI";


const Main = observer(() => {
    const {material} = useContext(Context)

    useEffect(() => {
        fetchSubjects().then(data => material.setSubjects(data))
        fetchCategories().then(data => material.setCategories(data))
        fetchGroups().then(data => material.setGroups(data))
        fetchMaterials().then(data => material.setMaterials(data.rows))
    }, [])
    return (
        <Container>
            <Row className={"mt-2"}>
                <Col md={3}>
                    <SubjectBar/>
                </Col>
                <Col md={9}>
                    <GroupBar/>
                    <CategoryBar/>
                    <MaterialList/>
                </Col>
            </Row>
        </Container>
    );
});

export default Main;