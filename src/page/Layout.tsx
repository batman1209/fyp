import * as React from 'react';

export default function Layout(props: { left: React.ReactNode; center: React.ReactNode; }) {
    return (
      <div className="layout">
        
        <div className="left">{props.left}</div>
        <div className="center">{props.center}</div>
      </div>
    );
  }