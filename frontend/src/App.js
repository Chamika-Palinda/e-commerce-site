import { Grid } from '@material-ui/core';
import React from 'react'
import SidebarPanel from './components/Sidebar';
import ContentPanel from './components/ContentPanel';


function App() {

        // <div className="container">
        //     <Sidebar/>
        // </div>

return (
  <div className="container">
    <Grid container spacing={1}>
      <Grid item xs={3} sm={2}>
          <SidebarPanel/>
      </Grid>
      <Grid item xs={9} sm={10}>
        <ContentPanel/>
      </Grid>
    </Grid>
  </div>
);
}

export default App;
