import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Container} from "react-bootstrap";

const GroupBar = observer(() => {
    const {material} = useContext(Context)
    return (
        <Container>
            <div style={{color:'gray'}} className={"p-2 ms-2"}>Выберите категорию материалов:</div>
            <Container className={"d-flex"}>
            {material.groups.map(group =>
                <Card
                    key={group.id}
                    onClick={() => material.setSelectedGroup(group)}
                    border={group.id === material.selectedGroup.id ? 'primary' : 'light'}
                    className={"p-2 ms-1"}
                    style={{cursor:'pointer'}}
                >
                    {group.title}
                </Card>
            )}
            </Container>
        </Container>
    );
});

export default GroupBar;