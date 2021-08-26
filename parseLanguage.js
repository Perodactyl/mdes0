//This is for node.js and it makes a new copy of mdes for each language specified.
var fs = require("fs")
//All the languages
var files = fs.readdirSync("languages").map((v)=>{return v.replace(".txt", "")})
//The syntax crap this is all built around.
var regexes = JSON.parse(fs.readFileSync("regexes.json"))
files.forEach((langName)=>{
	var template = fs.readFileSync("languages/"+langName+".txt").toString()
	template = template.replace(/\?1/g, JSON.stringify(Object.keys(regexes), null, "\t"))
	template = template.replace(/\?2/g, JSON.stringify(Object.values(regexes), null, "\t"))
	template = template.replace(/\?0/g, JSON.stringify(regexes), null, "\t")
	fs.writeFileSync("mdes0."+langName, template)
})