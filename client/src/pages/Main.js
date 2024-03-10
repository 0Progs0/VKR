import React, {useContext, useEffect, useState} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import SubjectBar from "../components/SubjectBar";
import GroupBar from "../components/GroupBar";
import CategoryBar from "../components/CategoryBar";
import MaterialList from "../components/MaterialList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchMaterials} from "../components/http/materialAPI";
import Pages from "../components/Pages";
import {fetchUsers} from "../components/http/userAPI";
import {fetchSubjects} from "../components/http/subjectAPI";
import {fetchGroups} from "../components/http/groupAPI";
import {fetchCategories} from "../components/http/categoryAPI";
import CreateMaterial from "../components/modals/CreateMaterial";


const Main = observer(() => {
    const {user, material, subject, group, category} = useContext(Context)
    useEffect(() => {
        fetchUsers().then(data => user.setAllUsers(data))
        fetchSubjects().then(data => subject.setSubjects(data))
        fetchCategories().then(data => category.setCategories(data))
        fetchGroups().then(data => group.setGroups(data))
        fetchMaterials(null, null, null, null, 2, 1).then(data => {
            material.setMaterials(data.rows)
            material.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchMaterials(null, subject.selectedSubject.id, group.selectedGroup.id, category.selectedCategory.id, material.currentPage, 2).then(data => {
            material.setMaterials(data.rows)
            material.setTotalCount(data.count)
        })
    }, [subject.selectedSubject, group.selectedGroup, category.selectedCategory, material.currentPage])

    return (
        <Container>
            <Row className={"mt-2"}>
                <Col md={3}>
                    <SubjectBar/>
                </Col>
                <Col md={9} className={"d-flex flex-column"}>
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