import { useNavigate } from "react-router-dom";
import placeholder from "../assets/img/img-placeholder.jpg";

export default function PostCard({ post }) {
    const navigate = useNavigate();

    /**
     * handleClick is called when user clicks on the Article (PostCard)
     */
    function handleClick() {
        navigate(`posts/${post.id}`);
    }

    return (
        <article onClick={handleClick}>
            {post.image.includes("undefined") ? (
                <img src={placeholder} alt="Placeholder image" />

            ) : (
                <img src={post.image} alt={post.title} />
            )
            }
            <h2>{post.title}</h2>
            <p>{post.body}</p>

        </article>
    );
}
