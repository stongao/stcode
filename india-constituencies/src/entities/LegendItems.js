import LegendItem from "./LegendItem"

const legendItems = [
  new LegendItem("200+", "#741f1f", (density) => density >= 200, "white"),
  new LegendItem(
    "100-200",
    "#9c2929",
    (density) => density < 200 && density >= 100,
    "white",
  ),
  new LegendItem(
    "50-100",
    "#c57f7f",
    (density) => density < 100 && density >= 50,
    "black",
  ),
  new LegendItem(
    "25-50",
    "#ebd4d4",
    (density) => density < 50 && density >= 25,
    "black",
  ),
  new LegendItem("<25", "#ffffff", (density) => density < 25, "black"),
]

export default legendItems
