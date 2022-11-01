import { useState } from 'react';
import { usePost, useUpdateTitleMutation } from '../hooks/usePosts';

const PostTitleForm = () => {
	const {data} = usePost();
	const [title, setTitle]= useState(data.title)
	const usePostTitleMutation = useUpdateTitleMutation();

	const SetTitleOnChange = (e) => 
	{
		setTitle(e.target.value);
	}

	const handleOnSubmit = (e) => 
	{
		e.preventDefault();

		usePostTitleMutation.mutate(title)
	} 

	return (
		<form onSubmit={handleOnSubmit}>
			<input type="text" value={title} onChange={SetTitleOnChange}/>
			<button type="submit">Submit</button>
		</form>
	)
}

export default PostTitleForm;