import React from 'react';

import { DataGrid, Sorting, LoadPanel, Editing, Column } from 'devextreme-react/data-grid';

import { data } from '../data/calendar.js';

const ViewAllAppointments = () => {
  const dataGrid = React.createRef();

  return (
    <div className='grid-container'>
      <DataGrid
        id="dataGrid"
        dataSource={data}
        searchPanel={{ visible: true, width: 200, placeholder: 'Search...' }}
        showBorders={true}
        allowColumnReordering={true}
        allowColumnResizing={true}
        columnAutoWidth={true}
        ref={dataGrid}
      >
        <Sorting mode="multiple" />
        <LoadPanel enabled={true} />
        <Editing
          mode="popup"
          allowUpdating={true}
          allowDeleting={true}
          allowAdding={true}
          useIcons={true}
        />

        <Column dataField="text" />
        <Column dataField="startDate" dataType="datetime" />
        <Column dataField="endDate" dataType="datetime" />

      </DataGrid>
    </div>
  )
}

export default ViewAllAppointments;