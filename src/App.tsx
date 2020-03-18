import React, { RefAttributes } from 'react';
import logo from './logo.svg';
import './App.css';
import {GanttChartView} from './DlhSoft.ProjectData.GanttChart.React.Components';

interface GanttChartViewProps extends RefAttributes<any> {
  items: any;
  settings: any;
  change?: any;
  style?: any;
  children?: any;
}

function App() {
  var item1 = { content: 'My summary task' };
  var item2 = { content: 'My standard task', indentation: 1,
                start: new Date(2020, 3, 2, 8, 0, 0), finish: new Date(2020, 3, 7, 16, 0, 0), 
                completedFinish: new Date(2020, 3, 5, 16, 0, 0), assignmentsContent: 'My resource' };
  var items = [ item1, item2 ];
  var item3 = { content: 'My milestone', indentation: 1,
                start: new Date(2020, 3, 7, 16, 0, 0), isMilestone: true, predecessors: [{ item: item2 }] };
  items.push(item3);
  var settings = {
    timelineStart: new Date(2020, 3, 1),
    timelineFinish: new Date(2020, 7, 1)
  };

  function onItemChanged(item: any, propertyName: string, isDirect: boolean, isFinal: boolean) {
    console.log(propertyName + ' changed for ' + item.content + '.');
  }

  var props: GanttChartViewProps = { 
     items: items,
     settings: settings,
     change: onItemChanged,
     style: { height: '388px' }
  };

  return (
    <GanttChartView {...props}>…</GanttChartView>
  );
}

export default App;
