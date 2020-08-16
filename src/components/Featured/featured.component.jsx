import React from 'react';
import {Row, Col, Card, CardBody, CardTitle, CardFooter } from 'reactstrap';
import { Link } from 'react-router-dom';
function Featured({items}) {
    
    return (
        <Row>
            {items.map(item => (
                <Col id={item.id} md="4">
                <Card className="card-profile card-plain">
                    <div className="card-avatar">
                        <Link to={`/category/${item.id}`}>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/clem-onojeghuo-3.jpg")}
                      />
                    </a>
                        </Link>
                    </div>
                    <CardBody>
                        <Link to={`/category/${item.id}`}>
                            <CardTitle tag="h4">{item.title}</CardTitle>
                            <h6 className="card-category">{item.price}</h6>
                            <CardFooter className="text-center">{item.description}</CardFooter>
                        </Link>
                    </CardBody>
                </Card>
                </Col>
            ))}
        </Row>
    )
}

export default Featured
