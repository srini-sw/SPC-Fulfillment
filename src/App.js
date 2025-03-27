import React from 'react';
import { useState } from 'react';
import PubSub from 'pubsub-js';

export default () => {
  const [message, setMessage] = useState('')

  const handelUpdateMessage = () => {
    if (message) {
      PubSub.publish('fulfillmentBus', { activePayment: true });
  } else {
    alert('please enter address')
}
}
  
  return (
    <div className='bg-white p-3  mb-3'>
      <h1 className='text-3xl border-b-1 border-gray-300 pb-3 mb-4'>Fulfillment</h1>
      <label className='w-full text-sm'>Enter delivery address</label>
      <br/>
      <input className='h-[50] border-2 p-2 mb-3 border-gray-200 rounded-md' onChange={(e) => setMessage(e.target.value)} placeholder='Enter delivery address...' type='text' />
      <br/>
      <button className='bg-black rounded-sm text-white p-3 border-0' onClick={handelUpdateMessage}>Save and Continue</button>
    </div>
  );
};
