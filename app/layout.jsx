import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html className="page" lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>

      <body className="page__body">
        <header className="header">
          <a className="header__logo">Logo</a>
          <nav aria-label="Primary">
            <ul className="menu">
              <li className="menu__item">
                <a className="menu__link">Home</a>
              </li>
              <li className="menu__item">
                <a className="menu__link">About</a>
              </li>
              <li className="menu__item">
                <a className="menu__link">Contact</a>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
