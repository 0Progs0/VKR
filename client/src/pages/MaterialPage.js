import React, {useContext, useEffect, useState} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {useNavigate, useParams} from 'react-router-dom'
import {fetchOneMaterial} from "../components/http/materialAPI";
import {fetchFavorites, toggleFavorite} from "../components/http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import fileSaver from "file-saver/dist/FileSaver";
import {fetchGroups} from "../components/http/groupAPI";
import {fetchCategories} from "../components/http/categoryAPI";
import {LOGIN_ROUTE} from "../utils/consts";
import { AiFillHeart,  AiOutlineHeart } from "react-icons/ai";

const MaterialPage = observer(() => {
    const [currentMaterial, setCurrentMaterial] = useState({tags: []})
    const [favorites, setFavorites] = useState([])
    const {id} = useParams()
    const {user, group, category} = useContext(Context)
    const navigate = useNavigate()
    useEffect(() => {
            fetchCategories().then(data => category.setCategories(data))
            fetchGroups().then(data => group.setGroups(data))
            fetchOneMaterial(id).then(data => setCurrentMaterial(data))
            fetchFavorites(user.user.id).then(data => setFavorites(data))
            console.log(favorites)
            }
    ,[])
    const toggle = () => {
        if(favorites.some(favorite => favorite.materialId === currentMaterial.id)){
            toggleFavorite(user.user.id, currentMaterial.id)
            setFavorites(prev => prev.filter(favorite => favorite.materialId !== currentMaterial.id))
        } else {
            toggleFavorite(user.user.id, currentMaterial.id)
            setFavorites(prev => [...prev, {userId: user.user.id, materialId: currentMaterial.id}])
        }
    }

    const downloadFile = () => {
        fileSaver.saveAs(process.env.REACT_APP_API_URL + currentMaterial.file)
    }
    return (
        <Container>
            <Row><h3>{currentMaterial.title}</h3></Row>
            <Row>
                <Col className={"d-flex"}>
                <Card className={"me-1 p-1"}>{category.categories[currentMaterial.categoryId - 1]?.title}</Card>
                <Card className={"me-1 p-1"}>{group.groups[currentMaterial.groupId - 1]?.title}</Card>
            </Col>
            </Row>
            <Row className={"d-flex mt-3"}>
                <Col md={8}>
                    <embed src={process.env.REACT_APP_API_URL + currentMaterial.file + "#zoom=85&scrollbar=0&toolbar=0&navpanes=0"} style={{width:850, height:650}}/>
                </Col>
                <Col md={4}>
                    <Card className={"d-flex flex-column justify-content-center ms-2 p-2"}>
                        <div>Автор: {user.allUsers[currentMaterial.userId - 1]?.name}</div>
                        <div>{currentMaterial.description}</div>
                        {user.isAuth
                            ?
                            <div className={"mt-2 mb-2 d-flex justify-content-between"}>
                                <Button onClick={downloadFile}>Скачать</Button>
                                <Button className='' onClick={toggle}>{favorites.some(favorite => favorite.materialId === currentMaterial.id) ? <AiFillHeart size={30}/> : <AiOutlineHeart size={30}/>}</Button>
                            </div>

                            :
                            <div className={"mt-2 mb-2"}><Button variant={"primary"} onClick={() => navigate(LOGIN_ROUTE)}>Чтобы скачать, войдите в аккаунт</Button></div>
                        }
                        <div className={"d-flex flex-wrap"}>
                            {currentMaterial.tags.map(tag =>
                                <Card key={tag.id} className={"p-1 me-1"}>{tag.title}</Card>
                            )}
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
});

export default MaterialPage;