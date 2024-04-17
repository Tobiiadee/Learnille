/** @format */

import Section_Item from "./Course_Content/Section_Item";
import { CourseSectionType } from "./Course_Content/Course_Section_Content";

export default function Course_Video_Section({curriculum}: CourseSectionType) {
  return (
    <main className="flex flex-col gap-2">
      <Section_Item curriculum={curriculum}/>
      <Section_Item curriculum={curriculum}/>
      <Section_Item curriculum={curriculum}/>
      <Section_Item curriculum={curriculum}/>
    </main>
  );
}
