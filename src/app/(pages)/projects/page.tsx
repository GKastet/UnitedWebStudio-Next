import stylesPageProjects from "./pageProjects.module.css";

const PageProjects = () => {
  const { titleCommon, title } = stylesPageProjects;
  return (
    <>
      <h1>PageProjects</h1>
      <h2 className={titleCommon}>Common Title</h2>
      <h3 className={title}>Title</h3>
      {/* <h3 className={title}>Title</h3> */}
    </>
  );
};

export default PageProjects;
