let xmlContent = "";
let tableDMARC = document.getElementById("DMARC");
fetch("sampleDMARC.xml").then((response) => {
  response.text().then((xml) => {
    xmlContent = xml;

    //table builing stuff
    let row = document.createElement("tr");
    let td = document.createElement("td");

    let parser = new DOMParser();
    let xmlDOM = parser.parseFromString(xmlContent, "application/xml");
    let allNodes = xmlDOM.querySelectorAll("*");

    //function for getting desired value triangulated using element name and its parent element's name
    var getDataValue = function (childElement, parentElement) {
      let dataValue = "";

      allNodes.forEach((allNodesXmlNode) => {
        if (allNodesXmlNode.querySelector(childElement)) {
          potentialNodesParent =
            allNodesXmlNode.querySelector(childElement).parentElement.localName;
          potentialNodesInnerHTML =
            allNodesXmlNode.querySelector(childElement).innerHTML;
          if (potentialNodesParent == parentElement) {
            dataValue = potentialNodesInnerHTML;
          }
        }
      });
      return dataValue;
    };

    org = document.createElement("td");
    org.innerText = getDataValue("org_name", "report_metadata");
    email = document.createElement("td");
    email.innerText = getDataValue("email", "report_metadata");
    ip = document.createElement("td");
    ip.innerText = getDataValue("source_ip", "row");
    volume = document.createElement("td");
    volume.innerText = getDataValue("count", "row");
    spfAuthentication = document.createElement("td");
    spfAuthentication.innerText = getDataValue("result", "spf");
    spfAlignment = document.createElement("td");
    spfAlignment.innerText = getDataValue("spf", "policy_evaluated");
    dkimAuthentication = document.createElement("td");
    dkimAuthentication.innerText = getDataValue("result", "dkim");
    dkimAlignment = document.createElement("td");
    dkimAlignment.innerText = getDataValue("dkim", "policy_evaluated");

    row.appendChild(org);
    row.appendChild(email);
    row.appendChild(ip);
    row.appendChild(volume);
    row.appendChild(spfAuthentication);
    row.appendChild(spfAlignment);
    row.appendChild(dkimAuthentication);
    row.appendChild(dkimAlignment);
    tableDMARC.children[1].appendChild(row);
  });
});
