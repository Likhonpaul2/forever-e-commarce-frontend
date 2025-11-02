import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      {/* footer top  */}
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} alt="logo" className="mb-5 w-32 " />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
            veniam ullam mollitia ex similique dicta facere nihil sint officiis,
            nostrum fugit id doloribus, ea, cupiditate odio iure vitae
            laudantium quam.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+880 1725095122</li>
            <li>likhonpaul2@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* copyright section  */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">Copyright 2025@ forever.com - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
