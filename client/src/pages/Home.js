//DEPENDENCIES
// import { Link } from 'react-router-dom';
import react from 'react'
import { Col, Row } from 'react-bootstrap'
import NavComponent from '../components/Navbar/Navbar';
import Header from '../components/Header'

//GRAPHQL
// import { useQuery } from '@apollo/client';
// import { QUERY_MATCHUPS } from '../utils/queries';

const Home = () => {
	return (
		<div>
			<Row>
				<Col className='mt-3 col-12 justify-content-right'>
					<NavComponent />
				</Col>
			</Row>

			<section id="hero">
				{/* <div id='splashtext'>
					<h1>Shop Our Products</h1>
					<h3>Handmade baked goods delivered</h3>
					<button variant='outline-dark'>Enter Store</button>
				</div>
				<div id='logobox'> */}
				<img
					src="/ECNFM.png"
					alt="Empire Cheesecake Logo" />
				{/* </div> */}
			</section>
		</div>
	);
};

export default Home;
