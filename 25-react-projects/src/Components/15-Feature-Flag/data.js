const dummyApiResponse = {
  showLightAndDarkMode: true,
  showTicTacBoard: true,
  showRandomColors: true,
  showAccordian: true,
  showTreeView: true,
  showTab: true,
};

function featureFlagsDataServicesCall() {
  return new Promise((resolve, reject) => {
    if (dummyApiResponse) setTimeout(resolve(dummyApiResponse), 500);
    else reject("some error occured! please try again");
  });
}

export default featureFlagsDataServicesCall;
