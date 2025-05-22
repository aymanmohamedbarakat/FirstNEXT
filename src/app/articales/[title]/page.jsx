
import React from 'react';

export default async function TitlePage({ params }) {
  return (
    <div>
      <h1>titlePage</h1>
      <h2>{params.title}</h2>
    </div>
  );
}
