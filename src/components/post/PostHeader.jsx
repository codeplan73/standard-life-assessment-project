import { Link } from "react-router-dom";

const PostHeader = () => {
  const menu = [
    { link: "/", title: "Home" },
    { link: "/home", title: "Post" },
    { link: "/posts/preview", title: "Draft" },
    { link: "/posts/publish", title: "Publish" },
    { link: "#", title: "Settings" },
  ];
  return (
    <header className="flex flex-col items-center justify-center gap-2">
      <h2 className="py-4 text-xl font-semibold md:text-2xl">Bisola Space</h2>
      <hr className="w-full border border-grayTwo" />
      <ul className="flex items-center">
        {menu.map((item) => (
          <li key={item.link} className="mx-2">
            <Link className="text-gray-500" to={item.link}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      <hr className="w-full border border-grayTwo" />
    </header>
  );
};

export default PostHeader;
