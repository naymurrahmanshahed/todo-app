const Footer = () => {
  return (
    <footer className="footer bg-gray-900 text-teal-600 font-light text-sm container mx-auto p-10 lg:max-w-4xl border-t border-dashed border-teal-900 rounded-bl-xl rounded-br-xl text-center ">
      <p>&copy; {new Date().getFullYear()} Todo App. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
