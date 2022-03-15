import { collection, onSnapshot } from 'firebase/firestore';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { db } from '../../firebase';
import Header from './Header';

interface ReviewType {
  id: number;
  title: string;
  content: string;
}

export default function List() {
  const [reviews, setReviews] = useState<any>([]);

  useEffect(() => {
    onSnapshot(collection(db, 'reviews'), (snapshot) => {
      setReviews(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    });
  }, []);

  return (
    <>
      <Header />
      <div>
        <h1 className="text-3xl font-bold underline text-blue-800">
          Hello world!
        </h1>
        <div>
          {reviews.map((review: ReviewType) => (
            <div key={review.id}>
              <Link href="/auth">
                <a>{review.title}</a>
              </Link>
              <p>{review.content}</p>
              <br />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
