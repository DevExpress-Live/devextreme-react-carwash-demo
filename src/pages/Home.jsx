import React from 'react';

import Navbar from '../components/Navbar';
import AddNewCar from '../components/AddNewCar';
import Schedule from '../components/Schedule';
import ViewAllAppointments from '../components/ViewAllAppointments';

import TabPanel, { Item } from "devextreme-react/tab-panel";

const Home = () => {
  return (
    <>
      <Navbar />
      <h2 className='title'>DX Car Wash</h2>
      <div className='home-tab-control'>
        <TabPanel>
          <Item title="Add New">
            <AddNewCar />
          </Item>
          <Item title='Schedule'>
            <Schedule />
          </Item>
          <Item title="View All">
            <ViewAllAppointments />
          </Item>
        </TabPanel>
      </div>
    </>
  )
}

export default Home;