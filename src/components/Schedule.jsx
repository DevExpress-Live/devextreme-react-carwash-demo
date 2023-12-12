import React from 'react';

import Scheduler from 'devextreme-react/scheduler';

import { data } from '../data/calendar.js';

const Schedule = () => {
  return (
    <div className='scheduler-container'>
      <Scheduler
        dataSource={data}
        views={['day', 'workWeek', 'week', 'month']}
        allDayPanelMode='hidden'
        defaultCurrentView='workWeek'
        defaultCurrentDate={new Date()}
        timeZone='America/Los_Angeles'
        height={700}
        startDayHour={8}
        endDayHour={19}
        textExpr="text"
        startDateExpr="startDate"
        endDateExpr="endDate"
        allDayExpr="allDay"
        recurrenceRuleExpr="recurrenceRule"
        adaptivityEnabled={true}
      />
    </div>
  )
}

export default Schedule;