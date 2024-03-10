import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Pagination} from "react-bootstrap";

const Pages = observer(() => {
    const {material} = useContext(Context)
    const pageCount = Math.floor(material.totalCount / material.limit)
    const pages = []

    for (let i = 0; i <= pageCount; i++) {
        pages.push(i + 1)
    }
    return (
        <Pagination className={"d-flex justify-content-center mt-5"}>
            {pages.map(page =>
                <Pagination.Item
                    key = {page}
                    active = {material.currentPage === page}
                    onClick = {() => material.setCurrentPage(page)}
                >
                    {page}
                </Pagination.Item>
            )}
        </Pagination>
    );
});

export default Pages;