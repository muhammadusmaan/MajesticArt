import React from "react";
import Members from "../../Members/Members";
import MembersNav from "../../Members/MembersNav";
const BoardMembers = () => {
	return (
		<React.Fragment>
			<div className="container-fluid max-width-container px-0" >
			<MembersNav />
			<Members />
			</div>
		</React.Fragment>
	);
};

export default BoardMembers;
