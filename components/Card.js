import React from 'react'

const Card = (props) => {
  console.log(props);
  const { name, description, tags } = props.projectData;
  return (
    <div className="rounded-md mt-6 p-8 bg-[#F6F5F4] card">
     
      <h4 className="font-bold text-xl mb-2">{name}</h4>
      <p className="paragraph mb-6">{description}</p>
      <div>
        { tags.map((eachTags, index) => {
          return (<span key={index} className="px-1 py-0.5 border border-black rounded-md text-sm mr-2">{eachTags}</span>)
        }) }
      </div>
    </div>
  )
}

export default Card