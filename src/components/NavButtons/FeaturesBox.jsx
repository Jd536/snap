import React from 'react';

import {ReactComponent as TodoIcon} from '../../images/icon-todo.svg'; 
import {ReactComponent as CalendarIcon} from '../../images/icon-calendar.svg'; 
import { ReactComponent as ReminderIcon } from '../../images/icon-reminders.svg';
import { ReactComponent as PlanningIcon } from '../../images/icon-planning.svg';

import "./FeaturesBox.scss";

const FeaturesBox = () => {
  return (
    <div className="features-box-container">
      <div className="feature">
        <TodoIcon />
        <span className="feature-text">Todo List</span>
      </div>
      <div className="feature">
        <CalendarIcon />
        <span className="feature-text">Calendar</span>
      </div>
      <div className="feature">
        <ReminderIcon />
        <span className="feature-text">Reminders</span>
      </div>
      <div className="feature">
        <PlanningIcon />
        <span className="feature-text">Planning</span>
      </div>
    </div>
  )
}

export default FeaturesBox;