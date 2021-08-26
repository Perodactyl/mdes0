# MarkDown Extension Set 0
I don't have a V1 yet, but this is pretty handy. It's being implemented for many langauges, so if you wanna use it elsewhere you can probably check in a version for a language.<br>
This basically adds a few neat things I use a lot when making webpages.

Its also easy to use!<br>
PHP:
```php
require("mdes0.php");
$mdes = new MDES();
echo($mdes->text("{#FF0000:Hello Markdown!}"))
```
Javascript Client:
```javascript
//Earlier use <script src=mdes0.js></script>
var parsed = mdes.parse("{#FF0000:Hello Markdown!}")
console.log(parsed)
```
Javascript Server:
```javascript
var mdes = require("./mdes0.js")
var parsed = mdes.parse("{#FF0000:Hello Markdown!}")
console.log(parsed)
```

## Link Lists:
`-a /path/to/file:What the user reads`<br>
Just don't use a colon in your link. Use `//` if you need HTTPS or HTTP. If you want mailtos and websockets first of all websockets are a bad idea and second of all then I would have to rewrite the regex.<br>
`=a /path/to/file:What the user reads`<br>
The same as before, but it has an <img> leading to `external.svg`. It's an icon that I have a copy of.
## Colors!
`{#hexcodethatcanhavealpha:text}`<br>
`{:#bgcolor:text}`<br>
`{#color|#bgcolor:text}`<br>
`{:#bgcolor|color:text}`<br>
That's a lot of combinations. Right now there's only support for hex codes, sorry for `RGB` and `RGBA` users out there, we don't do that.
## Easy Subtext and Supertext:
`[^:supertext]`<br>
`[v:subtext]`<br>
It's that simple now.
## Underlines
`_underlined_`<br>
This _does_ mean that underscores mean underline, you'll have to use stars.
## Spoilers
```markdown
{>Title}(
Stuff
No whitespace inside the parens is needed.
)
```
That's it for the changes. If you want to add support for a language, simply create a new file called `language-name.txt` in the `languages` folder. In that file, put whatever code necessary, including any needed packages outside the `languages` folder. Any uses of `?0`, `?1`, and `?2` will be replaced with: A JSON object of the regex as a key and the replacement as a value, a JSON array of the regexes (Keys of `?0`), or a JSON array of the replacements. (Values of `?0`).
