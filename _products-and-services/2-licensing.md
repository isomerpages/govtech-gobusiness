---
layout: leftnav-page-content
title: Licensing
permalink: /products-and-services/licensing/
breadcrumb: Licensing
collection_name: products-and-services
---
Licensing Description </br>

<script type="text/javascript">
function test() {
  alert('aa');
}
</script>

<html>
<body>

<form>
  Select your favorite fruit:
  <select id="mySelect">
    <option value="apple">Apple</option>
    <option value="orange">Orange</option>
    <option value="pineapple">Pineapple</option>
    <option value="banana">Banana</option>
  </select>
</form>

<p>Click the button to change the selected fruit to banana..</p>

<button type="button" onclick="test()">Try it</button>

<script type="text/javascript">
function myFunction() {
  document.getElementById("mySelect").value = "banana";
}
</script>

<p id="demo">JavaScript can change HTML content.</p>

<button type="button" onclick='document.getElementById("demo").innerHTML = "Hello JavaScript!"'>Click Me!</button>

</body>
</html>
