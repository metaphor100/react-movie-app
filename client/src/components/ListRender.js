import React from 'react';

const createMarkup = (body) => {
  let innerString = body.replace(/\n/g, "</p><br /><p>");
  return {__html: innerString};
}

export const ListRender = (props) => {
    if (props.lists.length === 0) {
      return <p>No Lists Yet!</p>
    } else {
      return props.lists.map((results, index) => (
        <ul key={index}>
          <li>
            <p style={Style.listTitle}>{results.title}</p>
            <div style={Style.lineHeight} dangerouslySetInnerHTML={createMarkup(results.body)} />
          </li>
        </ul>
      ))
    
    }
}

const Style = {
    listTitle: {
        fontSize: '22px',
        marginBottom: '5px'
    },
    lineHeight: {
        lineHeight: 0.75,
        marginBottom: '25px'
    }
}