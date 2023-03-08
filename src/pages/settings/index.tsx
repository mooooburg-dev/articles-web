import React from 'react';
import { db } from '~/lib/fbase';
import { addDoc, collection } from '@firebase/firestore';

export default function Settings() {
  const handleClick = async () => {
    console.log(process.env.NEXT_APP_API_KEY);
    try {
      const docRef = await addDoc(collection(db, 'articles'), {
        title: 'addDocTest',
      });
      console.log('document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };
  return (
    <div>
      <h2>Settings</h2>
      <div onClick={handleClick}>등록</div>
    </div>
  );
}
