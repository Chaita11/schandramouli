import Link from "next/link";

const Footer = () => {
  return (
    <div className="containerFooter">
      <div className="containerSocials">
        <h1 className="socialText">
          <Link href="https://www.instagram.com/cha1ta11/">Instagram</Link>
        </h1>
        <h1 className="socialText">
          <Link href="https://discord.com/users/427025983950946314">
            Discord
          </Link>
        </h1>
        <h1 className="socialText socialTextMargin">
          <Link href="mailto:chandramouli.chaitanya@hotmail.com">Mail</Link>
        </h1>
      </div>
      <div className="containerFooterDown font-semibold">
        <h1>© 2023 All rights reserved. S Chandramouli</h1>
      </div>
    </div>
  );
};

export default Footer;
