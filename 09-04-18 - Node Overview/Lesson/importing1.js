import {myName, yourName} from "exporting1.js"
import * as exporting1 from "exporting1.js"
import anotherThing from "exporting1.js"
myName();
yourName("Steve");
exporting1.myName()
exporting1.yourName("George")
anotherThing();