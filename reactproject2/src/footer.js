const Footer = () => {
    const year = new Date().getFullYear();

    return <footer>
        {`Copyright � YALLA.INC ${year}`}
    </footer>;
};

export default Footer;