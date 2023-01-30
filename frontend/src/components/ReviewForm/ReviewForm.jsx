import { useRef } from "react";
import { Form, Input, Button } from "antd";

const ReviewForm = ({ movie, postReview }) => {
	const formRef = useRef();

	const submitForm = (values) => {
		const formData = {
			imdbId: movie.imdbId,
			...values,
		};
		postReview(formData);
		resetForm();
	};

	const resetForm = () => {
		formRef.current?.resetFields();
	};

	return (
		<Form ref={formRef} name="review" layout="vertical" onFinish={submitForm} autoComplete="off">
			<Form.Item label="Review" name="reviewBody">
				<Input.TextArea rows={4} />
			</Form.Item>
			<Form.Item>
				<Button type="primary" htmlType="submit">
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
};

export default ReviewForm;
