---
blurb: Making JSON viewable by humans with JavaScript and/or browser extensions.
category: Development
date: '2013-08-10'
slug: /pretty-printing-json-via-javascript-or-extension
tags: []
title: Pretty Printing JSON via JavaScript or Extension
type: post
---


####Summary

*If you're a webdev who uses JSON and you haven't seen [JSONView](http://jsonview.com/) for in-browser pretty printing of JSON, go check it out. Or, take a look at this [JS Fiddle](http://jsfiddle.net/alanwsmith/EwT4E/) if you want to roll your own in JavaScript to do something similar.*

####The Problem

Much of my work involves XML and JSON data feeds pulled over a web (HTTP) connection. Most browsers automatically "Pretty Print" XML files and add syntax highlighting and the ability to collapse sections. This makes spot checking data in the XML easy. For example<sup>1</sup>, this single blob of XML:


```html
<widget><debug>on</debug><window title="Sample Konfabulator Widget"><name>main_window</name><width>500</width><height>500</height></window><image src="Images/Sun.png" name="sun1"><hOffset>250</hOffset><vOffset>250</vOffset><alignment>center</alignment></image><text data="Click Here" size="36" style="bold"><name>text1</name><hOffset>250</hOffset><vOffset>100</vOffset><alignment>center</alignment><onMouseUp>sun1.opacity = (sun1.opacity / 100) * 90;</onMouseUp></text></widget>
```


is automagically turned into the much friendlier:

![Image: awsgrab-20130810--1300-01a.png](/awsgrab-20130810--1300-01a.png)

Unfortunately, the browsers I use<sup>2</sup> haven't caught up with JSON feeds enough to do the same thing. This corresponding JSON example:

```json
{"widget": {"debug": "on","window": {"title": "Sample Konfabulator Widget","name": "main_window","width": 500,"height": 500},"image": { "src": "Images/Sun.png","name": "sun1","hOffset": 250,"vOffset": 250,"alignment": "center"},"text": {"data": "Click Here","size": 36,"style": "bold","name": "text1","hOffset": 250,"vOffset": 100,"alignment": "center","onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;"}}}
```

gets no real help and just shows up like this:

![Image: awsgrab-20130810--1258-01a.png](/awsgrab-20130810--1258-01a.png)

That's not horrible for smaller files, but with larger ones, it gets messy fast.

![Image: awsgrab-20130810--1242-01b.png](/awsgrab-20130810--1242-01b.png)

####Solution 1 - The Hacky Way

I've found two nice solutions for this. The first approach is that of a webdev hacker: Use JavaScript itself to do the formatting. This works great for times when a page is consuming JSON and can be passed a debug flag. The basic approach came from an answer on StackOverflow<sup>3</sup>. I modified it a little to suite my needs. The first step is to add a `<pre>` tag with your preferred target ID:

```html
<pre id="pretty_json"></pre>
```

My version of the JavaScript function looks like this:

```javascript{numberLines: true}
function jsonPrettyHighlightToId(jsonobj, id_to_send_to) {
    
    var json = JSON.stringify(jsonobj, undefined, 2);
    
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    json = json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'color: darkorange;';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'color: red;';
            } else {
                cls = 'color: green;';
            }
        } else if (/true|false/.test(match)) {
            cls = 'color: blue;';
        } else if (/null/.test(match)) {
            cls = 'color: magenta;';
        }
        return '<span style="' + cls + '">' + match + '</span>';
    });
    
    document.getElementById(id_to_send_to).innerHTML = json;
}
```


Just pass the function a JSON object and the ID to update like so:


```javascript{numberLines: true}
var pseudo_json_object = {a:1, 'b':'foo', c:[true,false,null,'true','false','null', {d:{e:1.3e5,f:'1.3e5'}}]};

jsonPrettyHighlightToId(pseudo_json_object, 'pretty_json');
```

Here is a live example of the output (done in an unsafe, hacky way for simplicity that may or may not work with your browser).

*NOTE: This code has been disabled in order to get the file to load with MDX. TODO: Update this to work with MDX*

```html
<form>
<input type="text" id="pseudo_json" size="60" value="{ a:1, 'b':'foo', c:[true,false,null,'true','false','null', {d:{e:1.3e5,f:'1.3e5'} } ] } " />
<input type="button" onclick="loadNewData(); return false;" value="Update" />
</form>

<pre id="pretty_json_example"></pre>


<script type="text/javascript">

function jsonPrettyHighlightToId(jsonobj, id_to_send_to) {
    
    var json = JSON.stringify(jsonobj, undefined, 2);
    
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    json = json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'color: darkorange;';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'color: red;';
            } else {
                cls = 'color: green;';
            }
        } else if (/true|false/.test(match)) {
            cls = 'color: blue;';
        } else if (/null/.test(match)) {
            cls = 'color: magenta;';
        }
        return '<span style="' + cls + '">' + match + '</span>';
    });
    
    document.getElementById(id_to_send_to).innerHTML = json;
    
}


var pseudo_json_object = {a:1, 'b':'foo', c:[true,false,null,'true','false','null', {d:{e:1.3e5,f:'1.3e5'}}]};

jsonPrettyHighlightToId(pseudo_json_object, 'pretty_json_example');


function loadNewData() {

	// var loaded_unsafe_object = eval(  );

	// alert(loaded_unsafe_object);

	jsonPrettyHighlightToId( eval( "(" + document.getElementById('pseudo_json').value + ")" ), 'pretty_json_example');

}

</script>
```



Note that the JavaScript function adds the styles inline. Generally a poor practice, it's nice here. Syntax highlighted debugging output is provided without having to alter active CSS files.


#### Solution 2 - The JSONView Browser Extension

Of course, most of the time, it's nicer to simply get a human readable version of the JSON directly from the browser. Enter the [JSONView](http://jsonview.com/)<sup>4</sup>  extension. Originally built for FireFox, there is a Chrome version available as well. It works like a champ, turning the small example JSON from the mess above to this nice, clean output:

![Image: awsgrab-20130810--1703-01a.png](/awsgrab-20130810--1703-01a.png) 

Pretty Printing. Syntax Highlighting. Collapsing Nodes. JSONView is great. It even lets you mess with the style sheet and change font sizes. A must have for webdev types who work with JSON.


<br /><br />

---


*Foot Notes<sup>5</sup>*

1. The example XML and JSON files were lifted from the [examples on the json.org site](http://json.org/example.html).
2. My main development browsers are Chrome, Firefox and Safari on a Mac. Your mileage may vary with IE.
3. The initial [StackOverflow answer](http://stackoverflow.com/questions/4810841/json-pretty-print-using-javascript/7220510#7220510) showing how to use regular expressions in JavaScript to stringify a JSON object and add syntax highlighting to it. 
4. [JSONView](http://jsonview.com/) - The extension to make your JSON reading life much nicer. 
5. This really should have been split into a "two-part" set of posts. Alas, other priorities prevent the amount of editing that would take.