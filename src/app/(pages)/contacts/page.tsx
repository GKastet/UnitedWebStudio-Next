//Page Contacts
import { Metadata } from "next";
import Link from "next/link";
import stylesPageContacts from "./pageContacts.module.css";

export const metadata: Metadata = {
  title: "Contacts",
};

const PageContacts = () => {
  const { titleCommon, title } = stylesPageContacts;

  return (
    <>
      <h1>Page Contacts</h1>
      <h2 className={titleCommon}>Common Title</h2>
      <h3 className={title}>Title</h3>
      <Link href="/projects">To ProjectsPage | </Link>
      <Link href="/">To Main</Link>
    </>
  );
};

export default PageContacts;
