import React from 'react'

export default function PostItem({post}) {
  const {title, excerpt, author, date, featured_media} = post;
  console.log("Post item",featured_media)
  return (
    <React.Fragment>
      <div className="post_excerpt_container">
        <div>
          <img src="https://cryptocoach.com/wp-content/uploads/2018/09/Everyone-hides-away-when-bears-are-about.jpg" alt=""/>
        </div>
        <div>
          <div dangerouslySetInnerHTML={{
              __html: title.rendered,
            }}/>
          <span>{author}</span>
          <span>{date}</span>
          <div dangerouslySetInnerHTML={{
              __html: excerpt.rendered,
            }} />

        </div>

      </div>
    </React.Fragment>
  )
}
