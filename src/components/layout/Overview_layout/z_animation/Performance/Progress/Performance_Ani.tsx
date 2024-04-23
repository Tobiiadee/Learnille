/** @format */

import classes from "./Perfomance_Ani.module.css"

export default function Performance_Ani() {
  return (
    <section className='w-full h-full flex items-center justify-center'>
      <div className={classes.spinner}>
        <div className={classes.container}></div>
      </div>
    </section>
  );
}
