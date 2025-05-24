import { useRef } from 'react';


function SearchButton({ onClick }) {
  return (
    <button onClick={onClick}>Search</button>
  );
}
function SearchInput({ inputRef }) {
  return (
    <input ref={inputRef} />
  );
}


export default function Page() {
  const inputRef = useRef(null);


  const handleFocus = () => {
    inputRef.current?.focus(); // 若 inputRef 存在則聚焦
  };


  return (
    <>
      <nav>
        <SearchButton onClick={handleFocus} />
      </nav>
      <SearchInput inputRef={inputRef} />
    </>
  );
}
