/**
 * URL 파라미터를 가져오는 훅
 * 특정 ID로 데이터를 불러올 때 유용 
 */
import { useParams } from "react-router-dom";

function UseParams() {
    const { postId } = useParams();
    
    return <h2>Post ID: {postId}</h2>;
}
export default UseParams;