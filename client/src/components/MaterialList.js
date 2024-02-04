import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Row} from "react-bootstrap";
import {Context} from "../index";
import MaterialItem from "./MaterialItem";

const MaterialList = observer(() => {
    const {material} = useContext(Context)
    return (
        <Row className={"d-flex"}>
            {material.materials.map(material =>
                <MaterialItem key={material.id} material={material}/>
            )}
        </Row>
    );
});

export default MaterialList;