import { usePost } from '../hooks/usePosts';
import PostBody from './postBody';
import PostTitle from './postTitle';
import PostTitleForm from './postTitleForm';

const Post = () => {
	const {isLoading, isError} = usePost();

	if(isLoading)
	{
		return <div >Loading...</div>
	}	
	if(isError)
	{
		return <div >Error</div>
	}

	return <div >
		<PostTitle/>
		<PostBody/>
		<PostTitleForm/>
	</div>
}

export default Post;