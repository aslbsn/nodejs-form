import { Link } from 'react-router-dom';
import { Card } from "react-bootstrap";

import './App.css'

function Homepage() {
    return (
        <>


            <section id="anasayfa" className="d-flex gap-5 flex-column flex-sm-row justify-content-center">
                <Card className="shadow px-1 py-1" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://picsum.photos/id/237/200/200" style={{ height: '200px' }} />
                    <Card.Body>
                        <Card.Title>Kabul Şartları</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </Card.Text>

                    </Card.Body>
                </Card>

                <Card className="shadow px-1 py-1" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://picsum.photos/id/236/200/200" style={{ height: '200px' }} />
                    <Card.Body>
                        <Card.Title>Burslar</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </Card.Text>

                    </Card.Body>
                </Card>

                <Card className="shadow px-1 py-1" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://picsum.photos/id/238/200/200" style={{ height: '200px' }} />
                    <Card.Body>
                        <Card.Title>Program Ülkeleri</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </Card.Text>

                    </Card.Body>
                </Card>

            </section>
        </>

    );
}

export default Homepage;

