import React from "react"

const ProjectList = ({project}) => {
  return(
    <article>
      <p>{project.name}</p>
      <p>{project.description}</p>
    </article>
  )
}

export default ProjectList