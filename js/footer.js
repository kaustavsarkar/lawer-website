class Footer extends HTMLElement {
  constructor() {
    super();

    // Footer tag.
    const footerTag = document.createElement("footer");
    footerTag.setAttribute("id", "fh5co-footer");
    footerTag.setAttribute("role", "contentinfo");

    // Footer div container
    const divContainer = document.createElement("div");
    divContainer.setAttribute("class", "container");
    footerTag.appendChild(divContainer);

    // First footer row inside container.
    const row1 = document.createElement("div");
    row1.setAttribute("class", "row row-pb-md");
    divContainer.appendChild(row1);

    // Vision
    const visionSection = this.createVisionSection_();
    row1.appendChild(visionSection);

    // Navigation
    const navSection = this.createNavigationSection_();
    row1.appendChild(navSection);

    // Contact Information.
    const contactSection = this.createContactInformation_();
    row1.appendChild(contactSection);

    // Opening Hours.
    const ohSection = this.createOpeningHours_();
    row1.appendChild(ohSection);

    // Copy Right row.
    const copyRightSection = this.createCopyRight_();
    divContainer.appendChild(copyRightSection);

    // Add div container to the fragment.
    const fragment = document.createDocumentFragment();
    fragment.appendChild(footerTag);
    this.appendChild(fragment);
  }

  createCopyRight_() {
    const divSection = document.createElement("dev");
    divSection.setAttribute("class", "row copyright");

    divSection.innerHTML =
      '<div class="col-md-12 text-center">\
    <p>\
      <small class="block">&copy; 2022. All Rights Reserved.</small>\
      <small class="block">Designed by <a href="https://www.linkedin.com/in/kaustav-sarkar-84202a61/" target="_blank">\
      Kaustav Sarkar</a></small>\
    </p>\
    <p>\
    <ul class="fh5co-social-icons">\
      <li><a href="#"><i class="icon-twitter"></i></a></li>\
      <li><a href="#"><i class="icon-facebook"></i></a></li>\
      <li><a href="#"><i class="icon-linkedin"></i></a></li>\
    </ul>\
    </p>\
  </div>';
    return divSection;
  }

  createOpeningHours_() {
    const divCol = document.createElement("div");
    divCol.setAttribute("class", "col-md-3 col-md-push-1");

    divCol.innerHTML =
      '<h4>Opening Hours</h4>\
    <ul class="fh5co-footer-links">\
        <li>Mon - Thu: 9:00 - 21 00</li>\
        <li>Fri 8:00 - 21 00</li>\
        <li>Sat 9:30 - 15: 00</li>\
    </ul>';

    return divCol;
  }

  createContactInformation_() {
    const divCol = document.createElement("div");
    divCol.setAttribute("class", "col-md-3 col-md-push-1");

    divCol.innerHTML =
      '<h4>Contact Information</h4>\
      <ul class="fh5co-footer-links">\
      <li>B-43, South Extension Part-2, <br> New Delhi-110049</li>\
      <li>B-5, 2nd Floor (R)\
      <br> Greenfields Colony, Faridabad\
      <br>Haryana - 121010</li>\
      <li><a href="tel://1234567920">+ 1235 2355 98</a></li>\
      <li><a href="mailto:info@yoursite.com">info@yoursite.com</a></li>\
      <li><a href="#">yoursite.com</a></li>\
  </ul>';

    return divCol;
  }

  createNavigationSection_() {
    const navigationTitle = "Navigation";
    const divCol = document.createElement("div");
    divCol.setAttribute("class", "col-md-3 col-md-push-1");

    // Heading.
    const navHeading = document.createElement("h4");
    navHeading.innerHTML = navigationTitle;
    divCol.appendChild(navHeading);

    // Navigation UL.
    const ul = document.createElement("ul");
    ul.setAttribute("class", "fh5co-footer-links");

    // Nav Home.
    const homeList = document.createElement("li");
    const homeLink = document.createElement("a");
    homeLink.setAttribute("href", "index.html");
    homeLink.innerHTML = "Home";
    homeList.appendChild(homeLink);
    ul.appendChild(homeList);

    // Practice Area.
    const paListItem = document.createElement("li");
    const paLink = document.createElement("a");
    paLink.setAttribute("href", "practice.html");
    paLink.innerHTML = "Practice Areas";
    paListItem.appendChild(paLink);
    ul.appendChild(paListItem);

    divCol.appendChild(ul);

    return divCol;
  }

  createVisionSection_() {
    const sda_vision =
      "Ensuring every person on the Globe should have access to quality legal services.";
    const r1c1_header = "Our Vision";
    const r1_divCol1 = document.createElement("div");
    r1_divCol1.setAttribute("class", "col-md-3 fh5co-widget");

    const visionHeader = document.createElement("h4");
    visionHeader.innerHTML = r1c1_header;
    r1_divCol1.appendChild(visionHeader);

    const visionText = document.createElement("p");
    visionText.innerHTML = sda_vision;
    r1_divCol1.appendChild(visionText);

    return r1_divCol1;
  }
}

window.customElements.define("custom-footer", Footer);
