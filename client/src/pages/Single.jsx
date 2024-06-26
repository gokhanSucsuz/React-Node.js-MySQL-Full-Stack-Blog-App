import Edit from "../img/edit.png"
import Delete from "../img/delete.png"
import { Link, useLocation, useNavigate } from "react-router-dom"
import Menu from "../components/Menu"
import { useContext, useEffect, useState } from "react"
import axios from "axios"
import moment from "moment"
import { AuthContext } from "../context/authContext"

const Single = () => {
  const [post, setPost] = useState([])
  const navigate = useNavigate()
  const { currentUser } = useContext(AuthContext)
  const location = useLocation();
  const postId = location.pathname.split("/")[2]
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://nodejs-api-react-node-js-my-sql-full-stack-blog-app-ft5n.vercel.app/api/posts/${postId}`)
        setPost(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData();
  }, [postId])

  const handleDelete = async () => {
    try {
      await axios.delete(`https://nodejs-api-react-node-js-my-sql-full-stack-blog-app-ft5n.vercel.app/api/posts/${postId}`)
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }

  return (
    <div className="single">
      <div className="content">
        <img src={`../uploads/${post?.img}`} alt="" />
        <div className="user">
          {post?.userImg &&
            <img src={post.userImg} alt="" />
          }

          <div className="info">
            <span>{post?.username}</span>
            <p>Posted {moment(post?.date).fromNow()}</p>
          </div>
          {currentUser?.username === post?.username && (<div className="edit">
            <Link to={`/write?edit=2`} state={post}>
              <img src={Edit} alt="" />
            </Link>
            <img onClick={handleDelete} src={Delete} alt="" />
          </div>)}
        </div>
        <h1>{getText(post?.title)}</h1>
        {getText(post?.desc)}
      </div>
      <Menu cat={post?.cat} />
    </div>
  )
}

export default Single