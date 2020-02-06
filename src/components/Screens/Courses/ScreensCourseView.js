import React from 'react';
import Card from 'components/Card/Card.js';
import parse from 'html-react-parser';

function HTMLstringToHTML(html) {
  return { __html: html };
}

function ScreensCourseView(props) {
  // const { course } = props.this.location.state.course;
  console.log('courseview', props.location.state.course);
  const { course } = props.location.state;
  console.log('varcourse', course);
  return (
    <div className="content">
      <Card title={course.CourseName} content={parse(course.Content)} />
    </div>
  );
}

export default ScreensCourseView;
