import webpack from "webpack"
require("dotenv").config()

/* 
Authors: CruzHacks 2021 Engineers
*/
module.exports = {
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        REACT_APP_AUTH0_DOMAIN: JSON.stringify(process.env.REACT_APP_AUTH0_DOMAIN),
        REACT_APP_AUTH0_CLIENT: JSON.stringify(process.env.REACT_APP_AUTH0_CLIENT),
        REACT_APP_AUTH0_AUDIENCE: JSON.stringify(process.env.REACT_APP_AUTH0_AUDIENCE),
        REACT_APP_RECAPTCHA_SITE_KEY: JSON.stringify(process.env.REACT_APP_RECAPTCHA_SITE_KEY),
        REACT_APP_API_KEY: JSON.stringify(process.env.REACT_APP_API_KEY),
        REACT_APP_ENDPOINT_URL: JSON.stringify(process.env.REACT_APP_ENDPOINT_URL),
        REACT_APP_CORS_ORIGIN: JSON.stringify(process.env.REACT_APP_CORS_ORIGIN),
      },
    }),
  ],
}