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
			<div id='aboutus'>
				<h1 className="row storyh1">Our Story</h1>
				<p className="row about-p">Empire Cheesecakes was founded by Joseph Lamb, a self trained chef and baker. For years he was renowned among his family and friends for his cheesecake and other baked goods and they clamored for them every holiday and special occassion. Now we are bring those cheesecakes and baked goods to you and your family.</p>
				<p className='row about-p'>Our cheesecakes are prepared with a unique and tested blend of techniques and ingredients from New York, Chicago and Italian cheesecakes. They feature only the finest ingredients such as mascarpone cheese, farm fresh eggs and fresh fruits. These are handmade dailly in our bakery in historic Atlanta, Georgia and shipped to your doorstep. </p>
			</div>

			<div id='contactus'>
				<h3 className="row storyh3">
					Contact Us</h3>
				<h5 className='contactBlurb'>Contact us with inquiries or questions</h5>
				<a href='mailTo:Empirecheesecake@gmail.com'><button type="button" class="btn btn-secondary"> Email</button></a>

			</div>
		</section>
	);
};

export default About;