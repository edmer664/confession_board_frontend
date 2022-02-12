import React from "react";

export default function PostCard(props: any) {


  return (
    <div className="card" style={{width:'20rem', height:'25rem'}}>
      <div className="card-header">
          <h2>
              {props.title}
          </h2>
      </div>
        <div className="card-body">
            <p>{props.content.substring(0, 300)}
                {props.content.length > 300 && <a href={`/post/${props.id}`}><small>Read More</small></a>}
            </p>
        </div>
        <div className="card-footer">
            <small>
                Posted by <span className="fw-bold">{props.author ? props.author : "Anonymous"}</span> on {new Date(props.date).toDateString()}
            </small>
        </div>
    </div>
  );
}
