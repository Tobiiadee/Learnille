/** @format */
import classes from "./Perfomance_Ani.module.css";


export default function Progress() {
  return (
    <section>
      <div className={classes.progress}>
        <div className={classes.container}>
          <div className={classes.range}></div>
        </div>
      </div>
    </section>
  )
}