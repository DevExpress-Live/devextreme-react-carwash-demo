import React from 'react';

import Form, {
  SimpleItem,
  GroupItem,
  Label,
} from 'devextreme-react/form';
import { employee, positions, states } from '../data/profile.js';

import 'devextreme-react/text-area';

import Navbar from '../components/Navbar';

const Profile = () => {
  return (
    <div>
      <Navbar />
      <h2 className='title'>Profile</h2>
      <div className='profile-form'>
        <Form formData={employee}>
          <GroupItem cssClass="first-group" colCount={4}>
            <SimpleItem render={avatarRender}>
            </SimpleItem>
            <GroupItem colSpan={3}>
              <SimpleItem dataField="FirstName" />
              <SimpleItem dataField="LastName" />
              <SimpleItem
                dataField="BirthDate"
                editorType="dxDateBox"
                editorOptions={{ width: '100%' }}
              />
            </GroupItem>
          </GroupItem>
          <GroupItem cssClass="second-group" colCount={2}>
            <GroupItem>
              <SimpleItem dataField="Address" />
              <SimpleItem dataField="City" />
              <SimpleItem dataField="Position"
                editorType="dxSelectBox"
                editorOptions={{ items: positions, value: '' }} />
            </GroupItem>
            <GroupItem>
              <SimpleItem
                dataField="State"
                editorType="dxSelectBox"
                editorOptions={{ items: states }} />
              <SimpleItem dataField="ZipCode" />
              <SimpleItem
                dataField="Mobile"
                editorOptions={{ mask: '+1 (000) 000-0000' }}>
                <Label text="Phone" />
              </SimpleItem>
            </GroupItem>
            <SimpleItem
              colSpan={2}
              dataField="Notes"
              editorType="dxTextArea"
              editorOptions={{ height: 140 }}
            />
          </GroupItem>
        </Form>
      </div>
    </div>
  )
}

const avatarRender = () => {
  return (
    <div className="form-avatar"></div>
  );
}

export default Profile;