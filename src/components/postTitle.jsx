import { usePost } from '../hooks/usePosts';

const PostTitle = () => 
{
	const {data} = usePost();

	return <div>{data.title}</div>

}

export default PostTitle;