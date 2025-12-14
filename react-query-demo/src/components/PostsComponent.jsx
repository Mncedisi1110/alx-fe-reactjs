import { useQuery,QueryClient} from '@tanstack/react-query';

const fetchPosts = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return response.json();
}



function PostsComponent() {
    const { data,error, isError, isLoading } = useQuery('posts', fetchPosts);

    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (isError) {
        return <div>Error: {error.message}</div>;
    }
    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {data.map(post => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
            <button onClick={() => {
                const queryClient = new QueryClient({
                    defaultOptions: {
                        queries: {
                            refetchOnWindowFocus: false,
                            keepPreviousData: true,
                            staleTime: 5 * 60 * 1000, // 5 minutes
                            cacheTime: 10 * 60 * 1000, // 10 minutes
                        },
                    },
                });
                queryClient.invalidateQueries('posts');
            }}>ReFetch</button>

        
        </div>
    );
}

export default PostsComponent;