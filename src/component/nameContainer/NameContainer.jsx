import React from 'react';

const NameContainer = (props) => {
  console.log(props);

  let total = 0;

  return (
    <div className='mt-5'>
      {
        props.show.map(myItem =>
          <h1 className='bg-white p-5 m-2 rounded-xl mb-2'>{myItem.Title}</h1>

        )
      }
    </div>
  );
};

export default NameContainer;