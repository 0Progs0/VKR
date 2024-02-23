import React, {useContext, useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import SubjectBar from "../components/SubjectBar";
import GroupBar from "../components/GroupBar";
import CategoryBar from "../components/CategoryBar";
import MaterialList from "../components/MaterialList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchCategories, fetchGroups, fetchMaterials, fetchSubjects} from "../components/http/materialAPI";
import Pages from "../components/Pages";
import {fetchUsers} from "../components/http/userAPI";


const Main = observer(() => {
    const {user,material} = useContext(Context)

    useEffect(() => {
        fetchUsers().then(data => user.setAllUsers(data))
        fetchSubjects().then(data => material.setSubjects(data))
        fetchCategories().then(data => material.setCategories(data))
        fetchGroups().then(data => material.setGroups(data))
        fetchMaterials(null, null, null, 1, 2).then(data => {
            material.setMaterials(data.rows)
            material.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchMaterials(material.selectedSubject.id, material.selectedGroup.id, material.selectedCategory.id, material.currentPage, 2).then(data => {
            material.setMaterials(data.rows)
            material.setTotalCount(data.count)
        })
    }, [material.selectedSubject, material.selectedGroup, material.selectedCategory, material.currentPage])

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
                    <Pages/>
                </Col>
            </Row>
        </Container>
    );
});

export default Main;