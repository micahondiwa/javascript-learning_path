/*
Converts the characters &, <, >, " (double quote), and ' (apostrophe),
in a string to their corresponding HTML.
*/

function convertHTML(str) {
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  };

  return str.replace(/([&<>\"'])/gi, (match) => htmlEntities[match]);
}

//Test
convertHTML("Dolce & Gabbana");
