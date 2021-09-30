import React from "react";
import {
    Card,
    CardBody,   
    CardSubtitle,
} from "reactstrap";

const Category = ({ category }) => {
    return (
        <Card className="text-center">
            <CardBody>
                <CardSubtitle className="font-weight-bold">{category.categoryName}</CardSubtitle>                 
            </CardBody>
        </Card>
    );
};

export default Category;