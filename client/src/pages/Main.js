import React, {useContext, useEffect, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
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
import Search from "../components/Search";


const Main = observer(() => {
    const {user, material, subject, group, category} = useContext(Context)
    const [title, setTitle] = useState('')

    const handleTitleChange = (title) => {
        setTitle(title)
    }

    useEffect(() => {
        fetchUsers().then(data => user.setAllUsers(data))
        fetchSubjects().then(data => subject.setSubjects(data))
        fetchCategories().then(data => category.setCategories(data))
        fetchGroups().then(data => group.setGroups(data))
        subject.setSelectedSubject({})
        category.setSelectedCategory({})
        group.setSelectedGroup({})
    }, [user, subject, group, category, material])

    useEffect(() => {
        fetchMaterials(null, subject.selectedSubject.id, group.selectedGroup.id, category.selectedCategory.id, title, material.currentPage, 4).then(data => {
            material.setMaterials(data.rows)
            material.setTotalCount(data.count)
        })
    }, [material, title,subject.selectedSubject, group.selectedGroup, category.selectedCategory, material.currentPage, material.totalCount])


    return (
        <Container>
            <Row className={"mt-2"}>
                <Col md={3}>
                    <SubjectBar/>
                </Col>
                <Col md={9} className={"d-flex flex-column"}>
                    <GroupBar/>
                    <CategoryBar/>
                    <Search onChange={handleTitleChange}/>
                    <MaterialList/>
                    <Pages/>
                </Col>
            </Row>
        </Container>
    );
});

export default Main;