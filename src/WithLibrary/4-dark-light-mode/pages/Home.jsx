import { useTheme } from "../theme-context";

function Home() {
  const { theme } = useTheme();
  console.log("first>>>>>>>", theme);
  return (
    <div className={`page ${theme}`}>
      <h1>Home Page</h1>
      <p>Welcome to the Home Page!</p>
    </div>
  );
}

export default Home;
