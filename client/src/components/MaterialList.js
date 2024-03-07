import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Row} from "react-bootstrap";
import {Context} from "../index";
import MaterialItem from "./MaterialItem";

const MaterialList = observer(() => {
    const {user, material} = useContext(Context)
    return (
        <Row className={"d-flex"}>
            {material.materials.map(material =>
                <MaterialItem key={material.id} user={user} material={material}/>
            )}
        </Row>
    );
});

export default MaterialList;