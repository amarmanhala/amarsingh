import React from 'react'

const Card = (props) => {
  console.log(props);
  const { name, description, tags } = props.projectData;
  return (
    <div>
      <h4>{name}</h4>
      <p>{description}</p>
      <div>
        { tags.map((eachTags, index) => {
          return (<span key={index}>{eachTags}</span>)
        }) }
      </div>
    </div>
  )
}

export default Card