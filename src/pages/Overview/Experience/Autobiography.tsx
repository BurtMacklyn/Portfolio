import { useEffect, useState } from 'react';

export function Autobiography() {
  const [age, setAge] = useState(0);

  useEffect(() => {
    setAge(new Date().getFullYear() - 2006 - (new Date().getMonth() > 9 && new Date().getDate() >= 27 ? 0 : 1));
  });

  return (
    <div>
      <h5 className='white'>Autobiography</h5>
      <p>
        My name is Cooper Runyan, I was born on September 27, 2006, in San Diego, California, making me {age} years old today. I started coding when I was 13,
        in a language called Javascript. You probably have, at the very least, heard of this language, as it is debatably the most popular coding language
        today. Javascript is an amazing language, and I'm glad my dad encouraged me to learn it.
      </p>
    </div>
  );
}
