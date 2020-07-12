import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import EventIcon from '@material-ui/icons/Event';
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function CenteredTabs() {
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
      >
        <Tab label="All" data-filter = "all" icon={<CollectionsBookmarkIcon />}/>
        <Tab label="Past Events"  data-filter=".past" icon={<EventAvailableIcon />}  />
        <Tab label="Upcoming Events" data-filter=".upcoming"  icon={<EventIcon />}/>
      </Tabs>
    </Paper>
  );
}

