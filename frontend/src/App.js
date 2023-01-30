import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import api from "./api/axios.config";

import PageLayout from "./components/PageLayout/PageLayout";
import HomePage from "./pages/HomePage/HomePage";
import MoviePage from "./pages/MoviePage/MoviePage";

const App = () => {
	const [movies, setMovies] = useState([]);

	const getMovies = async () => {
		try {
			const response = await api.get("/api/v1/movies");
			setMovies(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getMovies();
	}, []);

	return (
		<>
			<Routes>
				<Route path="/" element={<PageLayout />}>
					<Route path="/" element={<HomePage movies={movies} />} />
					<Route path="/movie/:movieId" element={<MoviePage />} />
				</Route>
			</Routes>
		</>
	);
};

export default App;
