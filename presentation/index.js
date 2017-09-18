// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  CodePane
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  labatt: require("../assets/labatt.jpg"),
  owlcafe: require("../assets/owlcafe.jpg")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE",
  blue: "blue"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            DOUGLAS GROGG PRESENTATION
          </Heading>
          <Heading size={2} fit caps lineHeight={1} textColor="blue">
            FOR FIFTYTHREE
          </Heading>
          <Heading size={10} fit caps lineHeight={1} textColor="secondary">
            ABOUT HIMSELF
          </Heading>
          <Heading size={10} fit caps lineHeight={1} textColor="secondary">
            IN 16 SLIDES OR LESS
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>He's Great!</Quote>
            <Cite>Mom</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={10} fit caps lineHeight={1} textColor="white">
            Origin Story?...
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary">
          <img src="https://scontent.fphl2-4.fna.fbcdn.net/v/t1.0-9/298646_10100375589267987_1633494197_n.jpg?oh=6e0856a3687f1e47c9a6afd337bf32df&oe=5A029D1D" />
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/Zx1eDmuYQg8" frameborder="0" allowfullscreen></iframe>
        </Slide>
        <Slide>
          <CodePane source="MovieClip.prototype.onOver = function(c_nColor){
	this.onRollOver = function(){
		oColor = new Color(this);
		oColor.setRGB(c_nColor);					
	}
}
//rollout function
MovieClip.prototype.onOut = function(c_oColor){
	this.onRollOut = function(){
		oColor = new Color(this);
		oColor.setRGB(c_oColor);					
	}
}"/>
        </Slide>
        <Slide>
          <img src="http://news.psu.edu/sites/default/files/styles/photo_gallery_large/public/4951862119.jpg?itok=1QMT4tPC"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <img src="http://www.avantgrogg.com/images/forgetlines.jpg"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <img src="http://www.avantgrogg.com/images/pastemagazine.png" width="90%"/>
        </Slide>
        <Slide transition={["zoom"]} bgColor="secondary">
          <img src="http://www.avantgrogg.com/images/urbanoutfitters.png" width="90%"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <img src="http://www.gifimagesdownload.com/wp-content/uploads/2017/02/Tekken-7-gif-best.gif"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <img src={images.owlcafe} width="500" />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <img src={images.labatt} width="500" />
        </Slide>
        <Slide transition={["zoom"]} bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1} textColor="white">
            What Now?...
          </Heading>
         </Slide>
         <Slide transition={["zoom", "slide", "fade"]} bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1} textColor="white">
            Fin...
          </Heading>
         </Slide>
         <Slide transition={["slide"]} bgColor="secondary">
           <iframe width="560" height="315" src="https://www.youtube.com/embed/dM5sIBIRDLQ" frameborder="0" allowfullscreen></iframe>
        </Slide>
      </Deck>
    );
  }
}
