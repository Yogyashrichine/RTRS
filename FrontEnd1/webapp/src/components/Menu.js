import React from "react";
import {
    Card,
    CardBody,   
    CardSubtitle,
    CardText,   
} from "reactstrap";

const Menu = ({ menu }) => {
    return (
        <Card className="text-center">
            <CardBody>
                <CardSubtitle className="font-weight-bold">{menu.menuName}</CardSubtitle>
                <CardText>{menu.category}</CardText>
                <CardText>{menu.price}</CardText>                
            </CardBody>
        </Card>
    );
};

export default Menu;