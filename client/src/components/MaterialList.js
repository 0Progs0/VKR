import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Button, Container, Row} from "react-bootstrap";
import {Context} from "../index";
import MaterialItem from "./MaterialItem";
import CreateMaterial from "./modals/CreateMaterial";

const MaterialList = observer(() => {
    const {user, material} = useContext(Context)
    const [materialVisible, setMaterialVisible] = useState(false)
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
                    <div/>
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