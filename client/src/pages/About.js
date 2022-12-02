//DEPENDENCIES
// import { Link } from 'react-router-dom';
import react from 'react'
import { Row, Col } from 'react-bootstrap'
import NavComponent from '../components/Navbar/Navbar';
import Header from '../components/Header'
//GRAPHQL
// import { useQuery } from '@apollo/client';
// import { QUERY_MATCHUPS } from '../utils/queries';

const About = () => {
	return (
		<section>
			<Row>
				<Col className='col-6'>
					<Header />
				</Col>
				<Col className='col-6 mt-3'>
					<NavComponent />
				</Col>
			</Row>
			<div>
				<h1 className="row storyh1">Our Story</h1>
				<br></br>
				<p className="row about-p">In 1942, Grandmaw Memaw Josephine Lamb started baking cheesecakes and baking cheesecakes good.</p>
			</div>
		</section>
	);
};

export default About;