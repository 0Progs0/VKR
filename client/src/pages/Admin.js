import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateSubject from "../components/modals/CreateSubject";
import CreateCategory from "../components/modals/CreateCategory";
import CreateGroup from "../components/modals/CreateGroup";
import CreateMaterial from "../components/modals/CreateMaterial";

const Admin = () => {
    const [subjectVisible, setSubjectVisible] = useState()
    const [categoryVisible, setCategoryVisible] = useState()
    const [groupVisible, setGroupVisible] = useState()
    const [materialVisible, setMaterialVisible] = useState()
    return (
        <Container className={"d-flex flex-column"}>
            <Button
                variant={"primary"}
                className={"mt-2"}
                onClick={() => setSubjectVisible(true)}
            >
                Добавить предмет
            </Button>
            <Button
                variant={"primary"}
                className={"mt-2"}
                onClick={() => setCategoryVisible(true)}
            >
                Добавить категорию
            </Button>
            <Button
                variant={"primary"}
                className={"mt-2"}
                onClick={() => setGroupVisible(true)}
            >
                Добавить группу
            </Button>
            <Button
                variant={"primary"}
                className={"mt-2"}
                onClick={() => setMaterialVisible(true)}
            >
                Добавить материал
            </Button>

            <CreateSubject show={subjectVisible} onHide={() => setSubjectVisible(false)}/>
            <CreateCategory show={categoryVisible} onHide={() => setCategoryVisible(false)}/>
            <CreateGroup show={groupVisible} onHide={() => setGroupVisible(false)}/>
            <CreateMaterial show={materialVisible} onHide={() => setMaterialVisible(false)}/>
        </Container>
    );
};

export default Admin;