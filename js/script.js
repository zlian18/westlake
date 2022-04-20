// Remove .html when upload to repo
class Myheader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <nav class="navbar navbar-expand-sm p-0 navbar-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="index"><img id="logo" src="img/logo.png" alt="Westlake logo"></a>
                <div class="logo-text">
                    <h2>Westlake</h2>
                    <p>Fully Licensed Chinese Seafood Restaurant</p>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-lg-0">
                        <li class="nav-item p-0">
                            <a class="nav-link active" aria-current="page" href="index">Menu</a>
                        </li>
                        <li class="nav-item p-0">
                            <a class="nav-link active" aria-current="page" href="info">About</a>
                        </li>
                        <li class="nav-item p-0">
                            <a class="nav-link active" aria-current="page" href="location">Location</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    `;
  }
}
customElements.define("my-header", Myheader);

class Myfooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <footer>
            <div class="row">
                <div class="col-sm-3">
                    <div class="footer-title">About Westlake</div>
                    <p>Fully licensed Chinese Seafood Restaurant. We are the oldest chinese restaurant in Toowoomba who
                        first opened in 1979. Our menu have over 100 dishes and there's certainly something just right for
                        you!</p>
                </div>
                <div class="col-sm-3">
                    <div class="footer-title">Our Location</div>
                    <p>127-129 Anzac Avenue Toowoomba QLD 4350</p>
                    <p>Phone: (07) 4634 7188</p>
                </div>
                <div class="col-sm-3">
                    <div class="footer-title">Navigation</div>
                    <li><a class="footer-nav-link" href="info">About us</a></li>
                    <li><a class="footer-nav-link" href="index">Menu</a></li>
                    <li><a class="footer-nav-link" href="location">Map</a></li>
                </div>
                <div class="col-sm-3">
                    <img id="logo-footer" src="img/logo.png" alt="westlake logo">
                </div>
            </div>
        </footer>
    `;
  }
}
customElements.define("my-footer", Myfooter);

// Move to different menu section after nav barbutton click
function scrol(n) {
  const height = document.querySelector("#menu-fixed").offsetHeight;
  $("html,body").animate(
    {
      scrollTop: $(".menu" + n).offset().top - height,
    },
    0
  );
}
