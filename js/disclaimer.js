class Disclaimer extends HTMLElement {
  constructor() {
    super();

    this.setAttribute("class", "modal fade");

    // Create Content container.
    const divContainer = document.createElement("div");
    divContainer.setAttribute(
      "class",
      "disclaimer-content modal-body modal-dialog modal-dialog-centered fh5co-bg-section"
    );

    // Disclaimer header.
    const header = document.createElement("h2");
    header.innerHTML = "Reader/Visitor Acknowledgement";
    header.setAttribute("class", "heading-section");
    divContainer.appendChild(header);

    // Paragraph One for the disclaimer.
    const para1 = document.createElement("p");
    para1.innerHTML =
      'By proceeding further and clicking on the "I agree" button below, I/we acknowledge that I/ we wish to know more about SDA Legal for my/our own information. I/We acknowledge that there has been no solicitation or invitation of any sort whatsoever from SDA Legal or any of its members/consultants to create a Lawyer-Client relationship through this website. I/We further acknowledge that having read and understood the Disclaimer below, I/We accept that the following Disclaimer is binding on us. This Web site is a source for information purposes only and SDA Legal does not warrant that the information contained on this Web site is accurate or complete, and hereby disclaims any and all liability to any person for any loss or damage caused by errors or omissions, whether such errors or omissions result from negligence, accident or any other cause. SDA Legal further assumes no liability for the interpretation and/or use of the information contained on this Web site, nor does it offer a warranty of any kind, either express or implied.';
    divContainer.appendChild(para1);

    // Paragraph Two for the disclaimer.
    const para2 = document.createElement("p");
    para2.innerHTML =
      "This Web Site is not a source of advertisement or solicitation and the contents of this Web Site should not be construed as legal advice in any manner. The reader/visitor of this website should not consider this information to be an invitation for a lawyer-client relationship in any way and should not rely on any information provided herein and should always seek the advice of any competent Counsel licensed to practice in the reader/visitor Country/State.";
    divContainer.appendChild(para2);

    // Paragraph Three for the disclaimer.
    const para3 = document.createElement("p");
    para3.innerHTML = "I have read the Disclaimer & Agree to view the website.";
    divContainer.appendChild(para3);

    // Accept button.
    const accept = document.createElement("input");
    accept.setAttribute("type", "submit");
    accept.setAttribute("value", "Accept");
    accept.setAttribute("class", "btn btn-primary text-center");
    divContainer.appendChild(accept);

    // Disclaimer footer.
    const footer = document.createElement("footer");
    footer.innerHTML = " All Rights Reserved, Copyright SDA Legal 2022";
    divContainer.appendChild(footer);

    // Add div container to the fragment.
    const fragment = document.createDocumentFragment();
    fragment.appendChild(divContainer);

    // Add fragment to the section.
    const disclaimerSection = document.getElementById("disclaimer");
    disclaimerSection.appendChild(fragment);

    if (!this.getUserPreferance()) {
        this.showModal();
    }

    $(".disclaimer-content input").on("click", () => {
      this.onAgreeClick();
      this.hideModal(); 
    });
  }

  showModal() {
    $(".modal").modal("show");
  }

  hideModal() {
    $(".modal").modal("hide");
  }

  onAgreeClick() {
    localStorage.setItem("agreed", "true");
  }

  getUserPreferance = () => localStorage.getItem("agreed") === "true";
}

window.customElements.define("legal-disclaimer", Disclaimer);
