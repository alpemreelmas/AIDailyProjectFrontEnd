import React from 'react';

interface IResponse {
       messages: string[],
       type: string
}

const Response : React.FC<IResponse> = (props) => {
       return (
           <div className={`alert alert-${props.type} p-2 m-2 text-left`} role="alert">
               {props.messages.map((err, index) => (
                   <li key={index}>{err}</li>
               ))}
           </div>
       );
}

export default Response;
