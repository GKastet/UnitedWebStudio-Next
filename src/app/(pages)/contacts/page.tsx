import stylesPageContacts from "./pageContacts.module.css";

const PageContacts = () => {
  const { titleCommon, title } = stylesPageContacts;

  return (
    <>
      <h1>Page Contacts</h1>
      <h2 className={titleCommon}>Common Title</h2>
      <h3 className={title}>Title</h3>
    </>
  );
};

export default PageContacts;
