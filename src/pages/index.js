export default function Index() {
        return (
          <div>
            <header>
              <h1>':.:':.MojoMusic.:':.:'</h1>
              <img id="logo" src="https://github.com/Philip-phino/MOJOMUSIC/blob/main/logo%202.png?raw=true" alt="MojoMusic Logo" />
              <div className="links-container">
                <a href="/Login" className="styled-link">LOGIN</a>
                <a href="/Registration" className="styled-link">REGISTER</a>
              </div>
            </header>
            <br /><br />
            <div className="sliding-container">
              <div className="sliding-image">
                <img src="https://raw.githubusercontent.com/Philip-phino/MOJOMUSIC/27d11d2786161641806c717af5739c273bc51290/IMG_20240223_013019%20(1).jpg" alt="MojoMusic Logo" />
              </div>
              <div className="sliding-text">
                <h2>
                  “Music touches us emotionally,<br />
                  where words alone can’t.”<br />
                  ― Johnny Depp
                </h2>
              </div>
            </div>
            <footer>@COPYRIGHT-WWW.MOJOMUSIC.COM</footer>
          </div>
        );
      }
      