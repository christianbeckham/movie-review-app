import { List } from "antd";
import { CommentOutlined } from "@ant-design/icons";

const ReviewList = ({ reviews }) => {
	return (
		<List
			itemLayout="horizontal"
			dataSource={reviews}
			renderItem={(item) => (
				<List.Item>
					<List.Item.Meta avatar={<CommentOutlined />} description={item.body} />
				</List.Item>
			)}
		/>
	);
};

export default ReviewList;
