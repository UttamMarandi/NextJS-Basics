import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
import {useRouter} from "next/router"

function MeetupItem(props) {
  const router = useRouter()

  const showDetailsHandler = (props) => {
    console.log("props.id", props.id);
    // router.query gives the exact path of the url
    //router.push (/path_name) is equivalent to Link component with path_name 
    router.push('/' + props.id);

  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick = {showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
