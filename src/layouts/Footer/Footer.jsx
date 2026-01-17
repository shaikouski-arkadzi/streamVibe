import "./Footer.scss"

const menuItems = [
  {
    title: "Home",
    links: ["Categories", "Devices", "Pricing", "FAQ"],
  },
  {
    title: "Movies",
    links: ["Gernes", "Trending", "New Release", "Popular"],
  },
  {
    title: "Shows",
    links: ["Gernes", "Trending", "New Release", "Popular"],
  },
  {
    title: "Support",
    links: ["Contact us"],
  },
  {
    title: "Subscriptions",
    links: ["Plans", "Features"],
  },
  {
    title: "Connect with us",
    socialLinks: [
      {
        label: "Facebook",
        iconName: "facebook",
      },
      {
        label: "Twitter",
        iconName: "twitter",
      },
      {
        label: "LinkedIn",
        iconName: "linked-in",
      },
    ],
  },
]

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner containter">
        <nav className="footer__menu">
          {menuItems.map(({ title, links, socialLinks }) => (
            <div className="footer__menu-column" key={title}>
              <a href="/" className="footer__menu-title h6">
                {title}
              </a>
              {links?.length > 0 && (
                <ul className="footer__menu-list">
                  {links.map((link, index) => (
                    <li className="footer__menu-item" key={link}>
                      <a href="/" className="footer__menu-link">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>
        <div className="footer__extra"> </div>
      </div>
    </footer>
  )
}

export default Footer
