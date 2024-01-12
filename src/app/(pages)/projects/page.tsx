//Page Projects
import Link from "next/link";
import stylesPageProjects from "./pageProjects.module.css";

const PageProjects = () => {
  const { titleCommon, title } = stylesPageProjects;
  return (
    <>
      <h1>PageProjects</h1>
      <h2 className={titleCommon}>Common Title</h2>
      <h3 className={title}>Title</h3>
      <h3 className={title}>Title</h3>
      <Link href='/contacts'>To ContactsPage | </Link>
      <Link href='/'>To Main</Link>
    </>
  );
};

export default PageProjects;
