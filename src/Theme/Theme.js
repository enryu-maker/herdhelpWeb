
export const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  })
  export const COLORS={
      // Primary:"rgb(126,204,122)",
      Primary1:"#009a4885",
      Primary:"#009A48",
      // Primary:"#757D85",
      transparentPrimary: "#d6f5d6",
      transparentPrimary2: "#eaf7e9",
      white:"#ffffff",
      lightGray1: "#e6e6e6",
      lightGray2: "#e6e6e6",
      black:"black",
      gray: "#898B9A",
      gray2: "#BBBDC1",
      gray3: "#CFD0D7",
      darkGray: "#525C67",
      darkGray2: "#757D85",
      transparent: "transparent",
      red: "red",
      green: "#27AE60",
      layout:"#f0f0f0",
      yellow:'#ffdf00'
  }
  
  export const SIZES = {
      // global sizes
      base: 8,
      font: 14,
      radius: 12,
      padding: 24,
      base2: 10,
      // font sizes
      largeTitle: 40,
      h1: 30,
      h2: 22,
      h3: 16,
      h4: 14,
      h5: 12,
      body1: 30,
      body2: 22,
      body3: 16,
      body4: 14,
      body5: 12,

  };
//   const type = { base: (Platform.OS === "ios" ? "Helvetica Neue" : "monospace"), 
//   bold: (Platform.OS === "ios" ? "HelveticaNeue-Bold" : "monospace"), 
//   emphasis: (Platform.OS === "ios" ? "HelveticaNeue-Italic" : "monospace") }
  export const FONTS = {
      largeTitle: { fontFamily: "mono", fontSize: SIZES.largeTitle },
      h1: { fontFamily: "mono", fontSize: SIZES.h1,  fontWeight:'bold'},
      h2: { fontFamily: "mono", fontSize: SIZES.h2, fontWeight:'bold'},
      h3: { fontFamily: "mono", fontSize: SIZES.h3, fontWeight:'bold'},
      h4: { fontFamily: "mono", fontSize: SIZES.h4, fontWeight:'bold'},
      h5: { fontFamily: "mono", fontSize: SIZES.h5, fontWeight:'bold'},
      body1: { fontFamily:"mono", fontSize: SIZES.body1},
      body2: { fontFamily:"mono", fontSize: SIZES.body2},
      body3: { fontFamily:"mono", fontSize: SIZES.body3},
      body4: { fontFamily:"mono", fontSize: SIZES.body4},
      body5: { fontFamily:"mono", fontSize: SIZES.body5},
  };