import React, {useContext, useState} from 'react';
import {Context} from "../index";
import {Card, Container} from "react-bootstrap";
import {observer} from "mobx-react-lite";

const CategoryBar = observer(() => {
    const {category} = useContext(Context)
    const [mark, setMark] = useState(false)
    
    return (
        <Container>
            <div style={{color:'gray'}} className={"p-2 me-2"}>Выберите вид материалов:</div>
            <Container className={"d-flex"}>
                {category.categories.map(categoryItem =>
                    <Card
                        key={categoryItem.id}
                        onClick={() => {
                            if (!mark) {
                                category.setSelectedCategory(categoryItem)
                                setMark(true)
                            }
                            else {
                                category.setSelectedCategory({})
                                setMark(false)
                            }
                        }}
                        border={categoryItem.id === category.selectedCategory.id ? 'primary' : 'light'}
                        className={"p-2 me-1"}
                        style={{cursor:'pointer'}}
                    >
                        {categoryItem.title}
                    </Card>
                )}
            </Container>
        </Container>
    )
});

export default CategoryBar;