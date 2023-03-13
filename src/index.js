const sayHelloManyTimes = (times) =>
  new Array(times).fill(1).map((_, i) => `Hello ${i + 1}`);

const box = document.createElement("div");
box.innerHTML = sayHelloManyTimes(10).join("<br/>");
document.body.append(box);
