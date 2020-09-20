// const [width, setSize] = useState(
//   document.documentElement.getBoundingClientRect().width
// );
// const onSize = useCallback(() => {
//   setSize(document.documentElement.getBoundingClientRect().width);
// }, []);
// useEffect(() => {
//   window.addEventListener("resize", _.debounce(onSize, 500));
//   return () => window.removeEventListener("resize", onSize);
// }, [onSize]);
// return width > 1000 ? (
//   <myContext.Provider value={width}>
//     <Horizontal />
//   </myContext.Provider>
// ) : (
//   <myContext.Provider value={width}>
//     <Vertical />
//   </myContext.Provider>
// );
