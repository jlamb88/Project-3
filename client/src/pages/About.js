//DEPENDENCIES
// import { Link } from 'react-router-dom';

//GRAPHQL
// import { useQuery } from '@apollo/client';
// import { QUERY_MATCHUPS } from '../utils/queries';

const About = () => {
	return (
		<section>
    <div className="mt-5 d-flex justify-content-center">
			<img 
				src="/ECNFM.png"
				alt="Empire Cheesecake Logo" />
		</div>
		<div>
				<h1 className="row storyh1">Our Story</h1>
				<br></br>
				<p className="row about-p">In 1942, Grandmaw Memaw Josephine Lamb started baking cheesecakes and baking cheesecakes good.</p>
				</div>
  </section>
	);
};

export default About;