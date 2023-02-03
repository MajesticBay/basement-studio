import logo from "../images/logo.svg";
import styled from "styled-components";

const Image = styled.img`
    display: inline;
    position: ${({ openMobileMenu }) => (openMobileMenu ? 'absolute' : 'relative')};;
    z-index: ${({ openMobileMenu }) => (openMobileMenu ? '999' : '')};
    top: ${({ openMobileMenu }) => (openMobileMenu ? '16px' : '')};
    left: ${({ openMobileMenu }) => (openMobileMenu ? '24px' : '')}
    transition: z-index 5s ease-in-out;
`

export const MobileLogo = ({ openMobileMenu, setOpenMobileMenu }) => {
    return (
        <Image
            openMobileMenu={openMobileMenu}
            // onClick={() => setOpenMobileMenu(!openMobileMenu)}
            src={logo}
        >
        </Image>
    )
};

export default MobileLogo;