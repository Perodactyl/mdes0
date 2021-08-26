var mdParser = (text)=>{return text}
if(module){
	mdParser = require("./showdown").Converter().makeHTML
}
var mdes = {
	parse(text){
		var regs = {"/\\{(#(?:[A-z]|[0-9]){6,8}):([^}]+)\\}/":"<span style=\"color:$1\">$2</span>","/\\{:(#(?:[A-z]|[0-9]){6,8}):([^}]+)\\}/":"<span style=\"background-color:$1\">$2</span>","/\\{(#(?:[A-z]|[0-9]){6,8})\\|(#(?:[A-z]|[0-9]){6,8}):([^}]+)\\}/":"<span style=\"color:$1;background-color:$2\">$3</span>","/\\{:(#(?:[A-z]|[0-9]){6,8})\\|(#(?:[A-z]|[0-9]){6,8}):([^}]+)\\}/":"<span style=\"color:$2;background-color:$1\">$3</span>","/\\[v:([^\\]]+)\\]/":"<sub>$1</sub>","/\\[\\^:([^\\]]+)\\]/":"<sup>$1</sup>","/_([^_]+)_/":"<span style=\"text-decoration:underline;\">$1</span>","/\\{>([^\\]]+)\\}\\(([^\\)]+)\\)/":"<details><summary>$1</summary>$2</details>","/-a\\s+((?:[a-z]|[A-Z]|\\/|\\.)+)\\s*:\\s*(.*)/":"- <a href=\"$1\">$2</a>","/=a\\s+((?:[a-z]|[A-Z]|\\/|\\.)+)\\s*:\\s*(.*)/":"- <a href=\"$1\">$2</a><img src=\"/external.svg\" class=\"inline icon\"/>","/\\n?\\+\\+(?:.*|\\s*)*(?:\\+\\+)\\n?/U":""}
		Object.keys(regs).forEach((key)=>{
			text = text.replace(new RegExp(key), regs[key])
		})
		text = mdParser
	}
}

if(module){
	module.exports = mdes
}