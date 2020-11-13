/// Filter stuff
////
//// (var filterMarkers = function(category) {
  console.log("category=" + category);
  switch (category) {
    case "Retail":
      for (i = 0; i < gmarkers.length; i++) {
        marker = gmarkers[i];
        // If is same category or category not picked
        if (marker.category = 'Sporting Goods') {
          marker.setVisible(true);
        }
        // Categories don't match 
        else {
          marker.setVisible(false);
        }
      }
      break;
    case "Sporting Goods":
      for (i = 0; i < gmarkers.length; i++) {
        marker = gmarkers[i];
        // If is same category or category not picked
        if {
          marker.setVisible(true);
        }
        // Categories don't match 
        else {
          marker.setVisible(false);
        }
      }
      break;
    case ">=5":
      for (i = 0; i < gmarkers.length; i++) {
        marker = gmarkers[i];
        // If is same category or category not picked
        if (5 <= marker.mag) {
          marker.setVisible(true);
        }
        // Categories don't match 
        else {
          marker.setVisible(false);
        }
      }
      break;
    default:
      for (i = 0; i < gmarkers.length; i++) {
        marker = gmarkers[i];
        marker.setVisible(true);
      }
  }
}