import React, {useContext} from 'react';
import {Context} from "../index";
import {Card, Container} from "react-bootstrap";
import {observer} from "mobx-react-lite";

const CategoryBar = observer(() => {
    const {material} = useContext(Context)
    return (
        <Container>
            <div style={{color:'gray'}} className={"p-2 ms-2"}>Выберите вид материалов:</div>
            <Container className={"d-flex"}>
                {material.categories.map(category =>
                    <Card
                        key={category.id}
                        onClick={() => material.setSelectedCategory(category)}
                        border={category.id === material.selectedCategory.id ? 'primary' : 'light'}
                        className={"p-2 ms-1"}
                        style={{cursor:'pointer'}}
                    >
                        {category.title}
                    </Card>
                )}
            </Container>
        </Container>
    )
});

export default CategoryBar;