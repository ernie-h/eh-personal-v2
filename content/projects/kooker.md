+++
title = "Kooker: A Social platform for culinary enthusiasts"
description = "Kooker is a social media platform that connects homecooks, verified chefs, and critics, built with React and Springboot."
date = "2018-07-06"
author="Ernie Hao"
categories = ["Development"]
tags = ["React", "SpringBoot"]
tags_weight = 1
cardImg="/img/projects/kooker/hero.png"
type = "projects"
+++
{{< figure src="/img/projects/kooker.png" alt="Kooker hero" >}}
{{< highlight javascript >}}
const (x) => {
  console.log("hello");
};
{{< /highlight >}}

aliases
an array of one or more aliases (e.g., old published paths of renamed content) that will be created in the output directory structure . See Aliases for details.
audio
an array of paths to audio files related to the page; used by the opengraph internal template to populate og:audio.
date
the datetime assigned to this page. This is usually fetched from the date field in front matter, but this behaviour is configurable.
description
the description for the content.
draft
if true, the content will not be rendered unless the --buildDrafts flag is passed to the hugo command.
expiryDate
the datetime at which the content should no longer be published by Hugo; expired content will not be rendered unless the --buildExpired flag is passed to the hugo command.
headless
if true, sets a leaf bundle to be headless.
images
an array of paths to images related to the page; used by internal templates such as _internal/twitter_cards.html.
isCJKLanguage
if true, Hugo will explicitly treat the content as a CJK language; both .Summary and .WordCount work properly in CJK languages.
