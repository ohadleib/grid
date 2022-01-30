import React from 'react';
// import './index.css'

const Grid = ({ config, data }) => (
    <table className="table-flex">
        {config.map(({ title, component: Component, field }) => {
            return (
            <div>
            <thead>
            <tr>
                <th>{title}</th>
            </tr>
            </thead>
            <tbody>
            {data.map((item) => {
                return (
                     <tr>
                       <td>
                         {Component ? <Component data={item[field]}/> : item[field]}
                       </td>
                     </tr>
                )
            })}
            </tbody>
          </div>
            )
        })}
  </table>
)


export default Grid;