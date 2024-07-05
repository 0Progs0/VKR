import React, {useContext, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Button, Container, Form, Row} from "react-bootstrap";
import {Context} from "../index";
import MaterialItem from "./MaterialItem";
import CreateMaterial from "./modals/CreateMaterial";
import {LOGIN_ROUTE} from "../utils/consts";
import {useNavigate} from "react-router-dom";

const MaterialList = observer(() => {
    const {user, material} = useContext(Context)
    const [materialVisible, setMaterialVisible] = useState(false)
    const navigate = useNavigate()
    return (
        <Container>
            <Row className={"d-inline-flex ms-auto"}>
                {user.isAuth
                    ?
                    <Button
                        variant={"primary"}
                        className={"mt-3 mb-2"}
                        onClick={() => setMaterialVisible(true)}
                    >
                        Добавить материал
                    </Button>
                    :
                    <Button
                        variant={"primary"}
                        className={"mt-3 mb-1"}
                        onClick={() => navigate(LOGIN_ROUTE)}
                    >
                        Авторизуйтесь чтобы добавить материал
                    </Button>
                }
            </Row>
            <Row className={"d-flex flex-column"}>
                {material.materials.map(material =>
                    <MaterialItem key={material.id} user={user} material={material}/>
                )}
            </Row>
            <CreateMaterial show={materialVisible} onHide={() => setMaterialVisible(false)}/>
        </Container>
    );
});

export default MaterialList;