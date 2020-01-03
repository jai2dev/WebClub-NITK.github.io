// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';

// const useStyles = makeStyles({
//   root: {
//     flexGrow: 1,
//   },
// });

// export default function CenteredTabs() {
//   const classes = useStyles();
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Paper className={classes.root}>
//       <Tabs
//         value={value}
//         onChange={handleChange}
//         indicatorColor="primary"
//         textColor="primary"
//         centered
//       >
//         <Tab label="Past Events"  data-filter="all" />
//         <Tab label="2018" />
//         <Tab label="2019" />
//       </Tabs>
//     </Paper>
//   );
// }


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import AccountTreeIcon from '@material-ui/icons/AccountTree';
import MemoryIcon from '@material-ui/icons/Memory';
import PublicIcon from '@material-ui/icons/Public';
// import mdiCalendarClock from '@material-ui/icons/CalendarClock';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import DateRangeIcon from '@material-ui/icons/DateRange';
import EventNoteIcon from '@material-ui/icons/EventNote';
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function CenteredTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
        onChange={props.handleInput}
      >
        <Tab label="Past Events"  data-filter=".past" icon={<DateRangeIcon />}  />
        <Tab label="Upcoming Events" data-filter=".upcoming"  icon={<EventAvailableIcon />}/>
      </Tabs>
    </Paper>
  );
}
