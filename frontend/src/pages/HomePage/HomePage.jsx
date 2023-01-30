import Hero from "../../components/Hero/Hero";

const HomePage = ({ movies }) => {
	return (
		<div>
			<Hero movies={movies} />
		</div>
	);
};

export default HomePage;
