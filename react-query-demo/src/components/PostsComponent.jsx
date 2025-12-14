import { useQuery } from '@tanstack/react-query';

const fetchData = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return response.json();
}



function PostsComponent() {
    const { data, error, isLoading } = useQuery('posts', fetchData);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error fetching data</div>;
    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {data.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default PostsComponent;