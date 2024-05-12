import React, {useContext, useEffect} from 'react';
import {Context} from "../index";
import {Col, Container, Row} from "react-bootstrap";
import { fetchFavorites } from '../components/http/userAPI'
import MaterialItem from "../components/MaterialItem";

const FavoritesPage = () => {
    const {user} = useContext(Context)

    useEffect(() => {
        fetchFavorites(user.user.id).then(data => user.setFavorites(data))
    },[])

    return (
        <Container>
            <Row className={"d-flex justify-content-center"}>
                <Col md={2}/>
                <Col md={10}>
                    {user.favorites.map(material =>
                        <MaterialItem key={material.id} user={user} material={material}/>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default FavoritesPage;

