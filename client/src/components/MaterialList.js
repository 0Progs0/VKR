import React, {useContext, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Button, Container, Form, Row} from "react-bootstrap";
import {Context} from "../index";
import MaterialItem from "./MaterialItem";
import CreateMaterial from "./modals/CreateMaterial";

const MaterialList = observer(() => {
    const {user, material} = useContext(Context)
    const [materialVisible, setMaterialVisible] = useState(false)
    const [value, setValue] = useState('')
    const filteredMaterials = material.materials.filter(material => material.title.toLowerCase().includes(value.toLowerCase()))
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
                        onClick={() => setMaterialVisible(true)}
                    >
                        Авторизуйтесь чтобы добавить материал
                    </Button>
                }
            </Row>
            <Row>
                <Form className={"mb-2"}>
                    <Form.Group >
                        <Form.Control
                            className={"mt-3"}
                            placeholder={"Введите название"}
                            value={value}
                            onChange={e => setValue(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>
                </Form>
            </Row>
            <Row className={"d-flex flex-column"}>
                {filteredMaterials.map(material =>
                    <MaterialItem key={material.id} user={user} material={material}/>
                )}
            </Row>
            <CreateMaterial show={materialVisible} onHide={() => setMaterialVisible(false)}/>
        </Container>
    );
});

export default MaterialList;