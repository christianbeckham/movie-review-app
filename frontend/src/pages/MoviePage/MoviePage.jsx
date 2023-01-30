import { useEffect, useState } from "react";
import { Row, Col, Divider } from "antd";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";

import api from "../../api/axios.config";
import ReviewForm from "../../components/ReviewForm/ReviewForm";
import ReviewList from "../../components/ReviewList/ReviewList";

const MoviePage = () => {
	const { movieId } = useParams();
	const [movie, setMovie] = useState();
	const [reviews, setReviews] = useState([]);

	const getMovieData = async (movieId) => {
		try {
			const response = await api.get(`/api/v1/movies/${movieId}`);
			setMovie(response.data);
			console.log(response.data);
			setReviews(response.data.reviewIds);
		} catch (error) {
			console.error(error);
		}
	};

	const postReview = async (data) => {
		try {
			const response = await api.post("/api/v1/reviews", data);
			if (response.status === 201) getMovieData(movieId);
		} catch (error) {}
	};

	useEffect(() => {
		getMovieData(movieId);
	}, [movieId]);

	return (
		<Row gutter={{ xs: 8, sm: 16, md: 24 }}>
			<Col xs={24} md={12}>
				<ReactPlayer controls={true} playing={true} url={movie?.trailerLink} width="100%" />
			</Col>
			<Col xs={24} md={12}>
				<ReviewForm movie={movie} postReview={postReview} />
				<Divider />
				<ReviewList reviews={reviews} />
			</Col>
		</Row>
	);
};

export default MoviePage;
