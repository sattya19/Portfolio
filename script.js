function opentab(idName, linkId) {
  var tablinks = document.getElementsByClassName("tab-links");
  var tabcontents = document.getElementsByClassName("tab-contents");

  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }

  //   addEventListener.currentTarget.classList.add("active-link");
  //   document.getElementById(idName).classList.add("active-tab");

  var tabContent = document.getElementById(idName);
  tabContent.classList.add("active-tab");
  var tabLink = document.getElementById(linkId);
  tabLink.classList.add("active-link");
}
