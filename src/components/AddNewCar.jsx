import React from 'react';

import Form, { SimpleItem, Label, ButtonItem } from "devextreme-react/form";
import DateBox from 'devextreme-react/date-box';
import RadioGroup from 'devextreme-react/radio-group';


const vehicleTypes = ['Sedan', 'Coupe', 'SUV', 'Motorcycle'];
const options = ['Simple Wash', 'Full Detail', 'Exterior Detail', 'Interior Detail'];

const AddNewCar = () => {
  return (
    <div className='new-car-form'>
      <Form>
        <SimpleItem dataField="name" editorType="dxTextBox" editorOptions={{ placeholder: "John Doe" }}>
          <Label text="Name" />
        </SimpleItem>
        <SimpleItem dataField="email" editorType="dxTextBox" editorOptions={{ placeholder: "name@mail.com" }}>
          <Label text="Email" />
        </SimpleItem>
        <SimpleItem dataField="phone" editorType="dxTextBox" editorOptions={{ mask: '+1 (000) 000-0000' }}>
          <Label text="Phone" />
        </SimpleItem>
        <SimpleItem dataField="options" editorType="dxSelectBox" editorOptions={{ items: options, value: '' }}>
          <Label text="Options" />
        </SimpleItem>
        <SimpleItem dataField="vehicleType">
          <RadioGroup items={vehicleTypes} defaultValue={vehicleTypes[0]} layout='horizontal' />
        </SimpleItem>
        <SimpleItem>
          <Label text="Date Time" />
          <DateBox defaultValue={new Date()}
            type="datetime" />
        </SimpleItem>
        <SimpleItem
          dataField="Notes"
          editorType="dxTextArea"
          editorOptions={{ height: 100 }}
        />
        <ButtonItem horizontalAlignment="left"
          buttonOptions={{ text: "Submit" }}
        />
      </Form>
    </div>
  )
}

export default AddNewCar;