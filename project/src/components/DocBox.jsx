import { useState, useCallback } from 'react';

const fields = [
  {
    title: 'Product',
    context: 'This is product container',
  },
  {
    title: 'Details',
    context: 'This is Details container',
  },
  {
    title: 'Setting',
    context: 'This is Setting container',
  },
  {
    title: 'Login',
    context: 'This is Login container',
  },
];

function DocBox() {
  const [index, setIndex] = useState(0);
  const handleIndex = useCallback((idx) => {
    setIndex(idx);
  }, []);

  return (
    <div className="m-10">
      <div>
        <h1>hi</h1>
        {fields.map((item, idx) => (
          <button
            className="btn mr-2"
            key={item.title}
            onClick={() => handleIndex(idx)}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div className="border w-[30%] h-[50vh] flex items-center justify-center mt-2">
        <h1>{fields[index].context}</h1>
      </div>
    </div>
  );
}

export default DocBox;