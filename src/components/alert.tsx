import React from 'react';

interface IAlert {
       messages: string[],
       type: string
}

const Alert : React.FC<IAlert> = (props) => {
       return (
           <div className={`alert alert-${props.type} p-2 m-2 text-left`} role="alert">
               {props.messages.map((err, index) => (
                   <li key={index}>{err}</li>
               ))}
           </div>
       );
}

export default Alert;
