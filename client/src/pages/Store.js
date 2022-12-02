import { Row, Col } from 'react-bootstrap';
import { productArray } from '../productStore';
import ProductCard from '../components/ProductCard/ProductCard';
import Header from '../components/Header'
import NavComponent from '../components/Navbar/Navbar'

function Store() {
    return (

        <div>
            <Row>
                <Col className='col-6'>
                    <Header />
                </Col>
                <Col className='col-6 mt-3'>
                    <NavComponent />
                </Col>
            </Row>
            <h1 align='center' className='p-3'>
            </h1>
            <Row xs={1} md={3} className='g-4'>
                {productArray.map((product, index) => (
                    <Col align='center' key={index}>
                        <ProductCard product={product} />
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Store;