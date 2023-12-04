import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={400}
    height={400}
    viewBox="0 0 400 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="226" y="205" rx="7" ry="7" width="138" height="13" />
    <circle cx="296" cy="117" r="77" />
    <rect x="228" y="227" rx="7" ry="7" width="134" height="44" />
    <rect x="231" y="284" rx="7" ry="7" width="52" height="25" />
    <rect x="291" y="284" rx="7" ry="7" width="69" height="25" />
  </ContentLoader>
);

export default Skeleton;
