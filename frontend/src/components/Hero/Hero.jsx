import { Carousel } from "antd";

const Hero = ({ movies }) => {
	return (
		<Carousel autoplay>
			{movies.map((m) => (
				<div key={m.imdbId}>
					<div
						style={{
							height: "550px",
							width: "100%",
							background: `linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1)), url(${m.backdrops[0]})`,
							backgroundSize: "cover",
							backgroundRepeat: "no-repeat",
							position: "relative",
						}}
					>
						<div
							style={{
								position: "absolute",
								top: 0,
								bottom: 0,
								left: 0,
								right: 0,
								display: "flex",
								alignItems: "center",
								justifyContent: "space-evenly",
							}}
						>
							<div style={{ height: "300px", border: "1px solid royalblue", borderRadius: "4px", overflow: "hidden" }}>
								<img style={{ height: "100%" }} src={m.poster} alt={m.title} />
							</div>
							<h3>{m.title}</h3>
						</div>
					</div>
				</div>
			))}
		</Carousel>
	);
};

export default Hero;
