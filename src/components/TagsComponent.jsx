import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useFetchPhotos } from '../Hooks/UseFetchPhotos';
import './CardStyled.css'

const TagsComponent = () => {
    const { photos } = useFetchPhotos();

    if (!photos.message || !Array.isArray(photos.message) || photos.message.length === 0) {
        return <div>No hay fotos disponibles.</div>;
    }

    return (
        <div className="card-container">
            {photos.message.map((imageUrl, index) => (
                <CardItem key={index} imageUrl={imageUrl} />
            ))}
        </div>
    );
};

const CardItem = ({ imageUrl }) => {
    return (
        <Card style={{ width: '18rem', margin: '10px' }}>
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title>Image Title DOGS</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}

export default TagsComponent;