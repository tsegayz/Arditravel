import { useLocation, useHistory } from "react-router-dom";

function Destination() {
	const location = useLocation();
	const history = useHistory();
	const { itemData } = location.state;
	const { _id: activity_id } = itemData; 
	return <div></div>;
}

export default Destination;
