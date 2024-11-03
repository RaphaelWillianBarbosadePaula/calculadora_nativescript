const { createViewModel } = require("./home-view-model");

function pageLoaded(args) {
  const page = args.object;
  page.bindingContext = createViewModel();
}

exports.pageLoaded = pageLoaded;
