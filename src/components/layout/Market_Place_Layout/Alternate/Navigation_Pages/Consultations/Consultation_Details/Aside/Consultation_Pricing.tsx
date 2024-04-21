import Fifth_Section from "../../../Courses/Course_Details/Aside/Sections/Fifth_Section";
import First_Section from "../../../Courses/Course_Details/Aside/Sections/First_Section";
import Fourth_Section from "../../../Courses/Course_Details/Aside/Sections/Fourth_Section";
import Second_Section from "../../../Courses/Course_Details/Aside/Sections/Second_Section";
import Third_Section from "../../../Courses/Course_Details/Aside/Sections/Third_Section";

export default function Consultation_Pricing() {
  return (
    <section className='w-full tab:w-[25rem] flex flex-col gap-1'>
      <First_Section/>
      <Second_Section consultation={true}/>
      <Third_Section/>
      <Fourth_Section consultation={true}/>
      <Fifth_Section/>
    </section>
  )
}
