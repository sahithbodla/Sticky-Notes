export function Menu() {
  return (
    <svg width="2em" height="2em" viewBox="0 0 24 24">
      <path
        d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2z"
        fill="currentColor"
      ></path>
    </svg>
  );
}
export function More({setOpenTag}) {
  return (
    <svg onClick={()=>setOpenTag(flag=>!flag)} width="1.5em" height="1.5em" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M12 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2Z"
      ></path>
    </svg>
  );
}
