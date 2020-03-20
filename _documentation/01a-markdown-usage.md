---
layout: leftnav-page-content
title: Markdown Usage
permalink: /documentation/markdown/markdown-usage/
breadcrumb: Markdown Usage
collection_name: documentation
second_nav_title: Markdown
---

## What is Markdown?

Markdown is a way to style text on the web. You control the display of the document; formatting words as bold or italic, adding images, and creating lists are just a few of the things we can do with Markdown. Mostly, Markdown is simply regular text with a few non-alphabetic characters thrown in, like `#` or `*`.

## Markdown Guide

Here's a brief overview of the Markdown features you can use in any Markdown file, including those used on Isomer sites.

### Text

It is very easy to write in Markdown - just write normally! For example:

```
This is some normal text. *This sentence is in italics.* This **word** is in bold.
```

The above Markdown will produce:

This is some normal text. *This sentence is in italics.* This **word** is in bold.


### Headers

Headers are the big titles and subtitles on your page. For example, the headers you have seen so far on this page are "What is Markdown?", "Markdown Guide", and "Headers". Headers come in levels, with a level 1 header (aka `H1`) the biggest level usually used only for page titles.

```markdown
# This is a level 1 (H1) header!

## This is a level 2 (H2) header!

### This is a level 3 (H3) header!

#### This is a level 4 (H4) header!
```

The above Markdown will produce:

# This is a level 1 (H1) header!

## This is a level 2 (H2) header!

### This is a level 3 (H3) header!

#### This is a level 4 (H4) header!

### Links and Images

To place an image in your Markdown file, first [upload the image](/github-repository/uploading-a-file/) into your `/images/` folder. Then use the following Markdown syntax:

<!--```markdown
!
```-->

Markdown uses the [kramdown](https://kramdown.gettalong.org/index.html) dialect of Markdown


### Videos

To embed a video on your page, simply copy the iframe code from Youtube or Vimeo after you've uploaded your video, and paste it onto your page.

![image of iframe code on youtube](/images/video.png)
