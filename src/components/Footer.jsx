const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className="flex items-center justify-center py-4 bg-slate-50">
      <p className="text-slate-500">
        Copyright @ {date} - Blog. All rights reserved
      </p>
    </div>
  );
};

export default Footer;
