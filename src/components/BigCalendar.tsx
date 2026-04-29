"use client"
import { Calendar, View, Views, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from 'react';

const localizer = momentLocalizer(moment)

const BigCalendar = ({
  data,
}: {
  data: { title: string; start: Date; end: Date }[];
}) => {
    const [view, setView] = useState<View>(Views.WORK_WEEK);

    const handleOnChangeView = (selectedView: View) => {
      setView(selectedView);
    };
    return  (
          <Calendar
            localizer={localizer}
            events={data}
            startAccessor="start"
            endAccessor="end"
            style={{ height: "95%" }}
            views={["work_week", "day"]}
            view={view}
            onView={handleOnChangeView}
            min={new Date(2026, 1, 0, 8, 0, 0)}
            max={new Date(2026, 1, 0, 18, 0, 0)}
          />
      )
}

export default BigCalendar;