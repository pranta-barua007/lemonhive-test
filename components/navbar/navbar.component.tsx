import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navbar.styled";

const navOpts = ["about us", "what we do", "our work", "blog", "say hi"];

const Navbar: FC = () => {
  return (
    <NavigationContainer>
        <Link href="/">  
      <LogoContainer>
        <Image src="/logo.svg" alt="logo" width={136} height={63} />
      </LogoContainer>
        </Link>
      <NavLinks>
        {navOpts.map((name, i) => (
          <Link key={i} href="/">
            <NavLink>{name}</NavLink>
          </Link>
        ))}
      </NavLinks>
      <Image src="/ham.svg" alt="menu" width={19} height={12}/>
    </NavigationContainer>
  );
};

export default Navbar;
