<?php
/*
	MarkDown Extension Set 0
*/
require("parsedown.php");
class MDES{
	public const version = "0.1.0";
	public function convert($text){
		$Parsedown = new Parsedown();
		$text = preg_replace([
#A whole lotta dense syntactical crap.
			"/\{(#(?:[A-z]|[0-9]){6,8}):([^}]+)\}/",
			"/\{:(#(?:[A-z]|[0-9]){6,8}):([^}]+)\}/",
			"/\{(#(?:[A-z]|[0-9]){6,8})\|(#(?:[A-z]|[0-9]){6,8}):([^}]+)\}/",
			"/\{:(#(?:[A-z]|[0-9]){6,8})\|(#(?:[A-z]|[0-9]){6,8}):([^}]+)\}/",
			"/\[v:([^\]]+)\]/",
			"/\[\^:([^\]]+)\]/",
			"/_([^_]+)_/",
			"/\{>([^\]]+)\}\(([^\)]+)\)/",
			"/-a\\s+((?:[a-z]|[A-Z]|\\/|\\.)+)\\s*:\\s*(.*)/",
			"/=a\\s+((?:[a-z]|[A-Z]|\\/|\\.)+)\\s*:\\s*(.*)/",
			"/\\n?\\+\\+(?:.*|\\s*)*(?:\\+\\+)\\n?/U"
		],[
			"<span style=\"color:$1\">$2</span>",
			"<span style=\"background-color:$1\">$2</span>",
			"<span style=\"color:$1;background-color:$2\">$3</span>",
			"<span style=\"color:$2;background-color:$1\">$3</span>",
			"<sub>$1</sub>",
			"<sup>$1</sup>",
			"<span style=\"text-decoration:underline;\">$1</span>",
			"<details><summary>$1</summary>$2</details>",
			"- <a href=\"$1\">$2</a>",
			"- <a href=\"$1\">$2</a><img src=\"/external.svg\" class=\"inline icon\"/>",
			""
		], $text);
		$text = $Parsedown->text($text);
		return $text;
	}
}
?>
