import ContentLoader from "react-content-loader";

const MyLoader = () => (
  <ContentLoader
    speed={0.7}
    width={400}
    height={500}
    viewBox="0 0 400 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="65" y="267" rx="7" ry="7" width="233" height="24" />
    <circle cx="181" cy="127" r="116" />
    <rect x="64" y="306" rx="7" ry="7" width="232" height="89" />
    <rect x="169" y="407" rx="7" ry="7" width="129" height="57" />
    <rect x="65" y="406" rx="7" ry="7" width="88" height="52" />
  </ContentLoader>
);

export default MyLoader;
