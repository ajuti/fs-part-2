import Subheader from "./Subheader.jsx"
import Content from "./Content.jsx"
import Total from "./Total.jsx"

const Course = ({course}) => {
  return (
    <> 
      <Subheader title={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts}/>
    </>
  )
}

export default Course