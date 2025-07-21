import { FaGithub } from "react-icons/fa"; // Yeh import kare agar icon chahiye

const Footer = () => {
  return (
    <footer className="bg-blackSmoke p-10 border-t-2 border-slate-200">
      <h2 className="text-Vermillion text-lg font-semibold">ShoppyGlobe</h2>
      <ul className="grid md:grid-cols-4 grid-cols-2 gap-5 mt-5 text-gray-500 cursor-pointer">
        <li className="hover:text-black">Audio Description</li>
        <li className="hover:text-black">Help Center</li>
        <li className="hover:text-black">Gift Cards</li>
        <li className="hover:text-black">Media Center</li>
        <li className="hover:text-black">Investor Relations</li>
        <li className="hover:text-black">Jobs</li>
        <li className="hover:text-black">Terms & Use</li>
        <li className="hover:text-black">Privacy</li>
        <li className="hover:text-black">Legal Notices</li>
        <li className="hover:text-black">Cookie Preferences</li>
        <li className="hover:text-black">Corporate Information</li>
        <li className="hover:text-black">Contact Us</li>

        {/* ✅ GitHub Link */}
        <li className="hover:text-black">
          <a
            href="https://github.com/anjalisharma-04/ShoppyGlobe-E-commerce-react"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <FaGithub /> GitHub Profile
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
