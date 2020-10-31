function newMockFrame(options = { dark: false, style: "regular" }) {
  var iframes = document.querySelectorAll("iframe");
  for (let iframe of iframes) {
    let parent = iframe.parentNode;
    let wrapper = document.createElement('div');
    wrapper.setAttribute("class", "window");
    let header = document.createElement("div");
    header.setAttribute("class", "header");
    header.innerHTML = `<div class="mockup-button red">&nbsp;&nbsp;</div>
          <div class="mockup-button yellow">&nbsp;&nbsp;</div>
          <div class="mockup-button green">&nbsp;&nbsp;</div>`
    parent.replaceChild(wrapper, iframe);
    wrapper.appendChild(header);
    wrapper.appendChild(iframe);
    let harry_styles = document.createElement("style");
    harry_styles.innerText = `

      iframe {
        width: 100%;
        height: 100%;
        border: none;
        border-bottom-left-radius: 9px;
        border-bottom-right-radius: 9px;
        display: block;
      }

      .window {
        border-radius: 9px;
        background-color: white;
        width: 100%;
        min-height: 100%;
        box-shadow: 0 0px 1.2px rgba(0, 0, 0, 0.021), 0 0px 2.7px rgba(0, 0, 0, 0.031),
          0 0px 4.6px rgba(0, 0, 0, 0.038), 0 0px 6.9px rgba(0, 0, 0, 0.044),
          0 0px 10px rgba(0, 0, 0, 0.05), 0 0px 14.2px rgba(0, 0, 0, 0.056),
          0 0px 20.1px rgba(0, 0, 0, 0.062), 0 0px 29.2px rgba(0, 0, 0, 0.069),
          0 0px 45px rgba(0, 0, 0, 0.079), 0 0px 80px rgba(0, 0, 0, 0.1);
      }

      .header {
        margin: 0px;
        background: #e8e8e8;
        border-top-left-radius: 9px;
        border-top-right-radius: 9px;
        height: 12px;
        padding: 12px;
      }

      .mockup-button {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        display: inline-block;
      }

      .red {
        background-color: #ff5f56;
      }

      .yellow {
        background-color: #ffc343;
        margin-left: 3px;
      }

      .green {
        background-color: #32a852;
        margin-left: 3px;
      }
    `;
    document.body.appendChild(harry_styles);
    
    if (options.dark === true) {
      let headers = document.querySelectorAll('.header');
      for (let header of headers) {
        header.style.backgroundColor = "rgb(54, 56, 58)";
      }
    }
    
    if (options.style === "darken") {
      let buttons = document.querySelectorAll('.mockup-button');
      for (let button of buttons) {
        button.style.backgroundColor = "#979799";
      }
    }
  }
};
