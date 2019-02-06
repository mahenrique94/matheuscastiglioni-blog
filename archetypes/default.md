---
autor: "Matheus Castiglioni"
categoria: ""
disqus_identifier: "{{ .Name }}"
disqus_title: "{{ replace .Name "-" " " | title }}"
disqus_url: "{{ .Site.BaseURL }}{{ .Name }}"
date: {{ .Date }}
draft: true
keywords: []
slug: "{{ .Name }}"
tag: []
thumbnail: ""
title: "{{ replace .Name "-" " " | title }}"
url: "/{{ .Name }}"
---

