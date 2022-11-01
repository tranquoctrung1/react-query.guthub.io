import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";

const GetPost = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts/1");

  return res.data;
};

const updatePostTitle = async (title) => {
  const res = await axios.patch(
    "https://jsonplaceholder.typicode.com/posts/1",
    { title: title }
  );

  return res.data;
};

export const usePost = () =>
  useQuery(["post"], GetPost, {
    refetchOnMount: true,
    refetchOnWindowFocus: true,
  });

export const useUpdateTitleMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(updatePostTitle, {
    // res = title of post
    onMutate: async (res) => {
      await queryClient.cancelQueries("post");

      const prevPostData = queryClient.getQueryData(["post"]);

      queryClient.setQueryData(["post"], (prevData) => ({
        ...prevData,
        title: res,
      }));

      return { prevPostData };
    },
    // res = a pos data object
    onSuccess: (res) => {
      queryClient.setQueryData(["post"], res);
    },
    // res = title of post
    onError: (error, res, { prevPostData }) => {
      queryClient.setQueryData(["post"], prevPostData);
    },
  });
};
