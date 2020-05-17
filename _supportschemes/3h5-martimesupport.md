---
title: Martime
permalink: /supportschemes/martimesupport/
third_nav_title: Support Schemes for Businesses
---

<form accept-charset="UTF-8" action="" method="POST">
<input type="text" name="tourName" value="">
<input type="text" name="tourPrice" value="">
<input type="email" name="email" placeholder="Your Email">
<input type="text" name="name" placeholder="Your Name">
<button type="submit">Submit</button>
</form>

<script>
// this script will automatically fill name and price fields 
// depending on what's passed in the url
var fillForm = function () {
    var queryString = document.location.search.split("+").join(" ");
    var params = {}, tokens, re = /[?&]?([^=]+)=([^&]*)/g;

    while (tokens = re.exec(queryString)) {
        params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
    }

    if (params.n == undefined && params.p == undefined){
        // no value in the query string
        // here you have to manage this use case : redirect or print a message to user
    }else{
        // filling form fields with query string values
        document.getElementsByName('tourName')[0].value = params.n;
        document.getElementsByName('tourPrice')[0].value = params.p;
    }
} ();
</script>