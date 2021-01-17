# start the api-server

yarn workspace api-server dev

# react-best-practises

implement react best practises into a legacy react application
( Local = D:\Kirans\Tutorials\REACT\iCargo REACT Training Resources\examples\contactappreduxform )
contact app

old version of react ( version 15.3 )

relies on redux state management

fetches data from an external api - rest call

uses redux form

styling ? - uses css files and css-loader

# packages

contact-app

npx create-react-app contact-app

# run the webpack-dev-server for development purpose

yarn workspace contact-app start

# uses formik

yarn workspace contact-app add formik

#Configure end point url in .env file against the key API_SERVER

#uses recoil

yarn workspace contact-app add recoil

# for styling we will be using styled-components which has lot of advantages as mentioned here https://www.smashingmagazine.com/2017/01/styled-components-enforcing-best-practices-component-based-systems/

yarn workspace contact-app add styled-components

# also install the babel plugin ( to the root package.json ? )

# npm install --save-dev babel-plugin-styled-components

yarn add babel-plugin-styled-components --dev -W

# need to override the babel config that comes as part of CRA

# for this we have to use a npm package called customize-cra

yarn add customize-cra react-app-rewired --dev -W

# use react-window component to render large lists of data

yarn workspace contact-app add react-window

# use (standalone) auto sizer from react-virtualised to make the list responsive

npm install --save react-virtualized-auto-sizer
yarn workspace contact-app add react-virtualized-auto-sizer

Setup

1. Run "yarn workspace api-server dev" to make the API response endpoint up and running

2. To change the webpack-dev-server port change in .env file in the root of the app

3. Run "yarn workspace contact-app start" to start the webpack-dev-server hosting the frontend
