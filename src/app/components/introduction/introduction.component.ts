import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'js-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit  {
content:any= `<p>-dynamically typed , Synchronous &amp; single-threaded Programming Language.<br>-dynamically typed means the types are checked, and datatype mismatches are spotted only at the runtime.<br>-JavaScript engine executes code from top to bottom, line by line.In other words, it is synchronous.<br>-JavaScript engine has only one 'call-stack' so that it only can do one thing at a time.</p>
<p>-A JavaScript engine is a program or an interpreter which executes JavaScript code.&nbsp;<br>&nbsp;&nbsp;</p>
<p>javascript Engines:<br>&nbsp; &nbsp; V8 &nbsp;- is developed by Google , Google Chrome.<br>&nbsp; &nbsp; SpiderMonkey - is developed by Mozilla , Firefox.<br>&nbsp; &nbsp; JavaScriptCore &nbsp;- is Apple's engine for its Safari browser.&nbsp;<br>&nbsp; &nbsp; Chakra &nbsp;- is the JavaScript engine of the Internet Explorer browser.</p>
<p>&nbsp;</p>
<p><br>Types<br>------<br>1. internal<br>&nbsp; &nbsp; a. &lt;script&gt;&lt;/script&gt; &nbsp; &nbsp;<br>&nbsp; &nbsp; b. head or body<br>&nbsp; &nbsp; c. page level javascript<br>&nbsp; &nbsp;&nbsp;<br>2. external<br>&nbsp; &nbsp; a. separate js file(needs to be included to html)<br>&nbsp; &nbsp; &nbsp; &nbsp; &lt;script src='abc.js'&gt;&lt;/script&gt; &nbsp; &nbsp;<br>&nbsp; &nbsp; b. head or body<br>&nbsp; &nbsp; c. Application level/project level</p>
<p>&nbsp; &nbsp; Javascript &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; TypeScript<br>---------------------------------------------------------<br>1.strongly typed-No &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;1.strongly typed-yes<br>2.directly run on browser &nbsp; &nbsp; &nbsp; &nbsp;2.not directly run on the browser<br>3.interface-No &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;3.interface - Yes<br>4.optional parameters-No &nbsp; &nbsp; &nbsp; &nbsp;4.optional parameters-yes<br>5.interpreted language &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;5.compiles the code<br>6.errors at runtime &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;6.errors during the development time<br>7.generics-no &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;7.generics-yes</p>`

  constructor(private title:Title){

  }
  ngOnInit(): void {
   this.title.setTitle("introduction")
  }



}
