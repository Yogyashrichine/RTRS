import React from "react";
import {
    Card,
    CardBody,   
    CardSubtitle,
    CardText,   
    Button,
    Container,
} from "reactstrap";

const User = ({ user }) => {
    return (
        <Card className="text-center">
            <CardBody>
                <CardSubtitle className="font-weight-bold">{user.firstName}</CardSubtitle>
                <CardText>{user.lastName}</CardText>
                <CardText>{user.email}</CardText>
                <CardText>{user.password}</CardText>
                <CardText>{user.city}</CardText>
                <CardText>{user.country}</CardText>
                <CardText>{user.zipCode}</CardText>
                <CardText>{user.phoneNo}</CardText>
                <Container >
                    <Button style={{ marginRight: 10}} color="danger">Delete</Button>
                    <Button color="warning">Update</Button>
                    
                </Container>
            </CardBody>
        </Card>
    );
};

export default User;