import Edit from "../img/edit.png"
import Delete from "../img/delete.png"
import { Link } from "react-router-dom"
import Menu from "../components/Menu"

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <div className="user">
          <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}><img src={Edit} alt="" /></Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit placeat omnis expedita dignissimos veritatis vitae quia fuga fugit excepturi itaque provident quaerat dicta reprehenderit quo, ex mollitia architecto, molestiae quidem hic.
          <br /><br />
          Pariatur, libero repellat, nihil qui aliquid eaque, recusandae quo excepturi voluptatem dolores asperiores! Libero quaerat minus ullam, facere harum voluptate dignissimos repellat eaque sed, beatae unde. At in fugiat aut, illo praesentium impedit ipsam repudiandae voluptates nihil porro consectetur sunt velit. Blanditiis voluptatum laborum explicabo consequuntur voluptate quas esse voluptas magnam? Atque, non natus! Maiores, odit, molestiae porro asperiores, reprehenderit provident tempore nam rerum quas inventore architecto ipsum incidunt.
          <br /><br />
          Blanditiis dolor illum deserunt reiciendis ea ad optio officiis sapiente hic, quod veritatis ullam cumque officia incidunt modi dolores impedit vero. Ratione, sint amet. Voluptatem ut, aut aliquid quaerat dicta earum placeat perferendis quia! Nulla voluptatem possimus deserunt, dolorum, assumenda officiis qui debitis impedit unde porro reiciendis sequi dolores quos?</p>
      </div>
      <Menu />
    </div>
  )
}

export default Single