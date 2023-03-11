import logo from "../../images/icons/logo.svg";
import styled from "styled-components";

const Image = styled.img`
    display: inline;
    position: ${({ openMobileMenu }) => (openMobileMenu ? 'fixed' : 'relative')};;
    z-index: ${({ openMobileMenu }) => (openMobileMenu ? '999' : '')};
    top: ${({ openMobileMenu }) => (openMobileMenu ? '16px' : '')};
    left: ${({ openMobileMenu }) => (openMobileMenu ? '24px' : '')};
    width: 4.5rem;
    height: 3.2rem;
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