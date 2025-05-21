import { Link } from "react-router";
import logo from '/FindMate.png'
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
                <nav>
                    <h6 className="footer-title">Contact</h6>
                    <div className="mb-2">
                        <Link to="/" className="flex gap-2 items-center">
                            <img className="md:w-[80px] h-[80px] rounded" src={logo} alt="FindMate Logo" />
                            <h2 className="text-xl font-bold text-cyan-500">FindMates</h2>
                        </Link>
                    </div>
                    <address>
                        1212 Road, Maungdaw, <br />
                        Arakan State of Myanmar <br />
                        Ph: +95000000001 <br />
                        Email: mustakahmmed793@gmail.com
                    </address>
                </nav>
                <nav>
                    <h6 className="footer-title">Quick Links</h6>
                    <Link className="link link-hover">My Listings</Link>
                    <Link className="link link-hover">Browse Listings</Link>
                    <Link className="link link-hover">Add to Find Roommates </Link>
                    <Link className="link link-hover">Advertisement</Link>
                </nav>

                <nav>
                    <h6 className="footer-title">Connect Us With</h6>
                    <div className="flex gap-3">
                        <a href="https://www.facebook.com/mustakahmmed793/" target="_blank" className="link link-hover"> <FaFacebook size={25} /> </a>
                        <a href="https://www.linkedin.com/in/mustakahmmed/" target="_blank" className="link link-hover"> <FaLinkedin size={25} /> </a>
                        <a href="https://www.github.com/mustakahmmed-dev/" target="_blank" className="link link-hover"> <FaGithub size={25} /> </a>
                    </div>
                </nav>
            </footer>
        </div>
    )
}

export default Footer;