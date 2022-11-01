import { useState } from 'react';
import { usePost } from '../hooks/usePosts';

const PostBody = () => 
{
	const [showBody, setShowBody] = useState(true);

	const {data} = usePost();
	
	const onShowBodyClicked = () => 
	{
		setShowBody(!showBody);
	}

	return <div>
		<button onClick={onShowBodyClicked}>{showBody? "Hide": "Show"}</button>
		<div>
			{showBody && data.body}
		</div>
	</div>

}

export default PostBody;