function replaceText(node) {
  if (node.nodeType === 3) {
    // 文本節點
    if (node.nodeValue.match(/中國|我國/)) {
      const span = document.createElement("span");
      span.innerHTML = node.nodeValue
        .replace(
          /中國/g,
          '<span style="background-color: #0000AA; color: white; padding: 4px 8px; border-radius: 100%;">大陸</span>'
        )
        .replace(
          /我國/g,
          '<span style="background-color: #0000AA; color: white; padding: 4px 8px; border-radius: 100%;">台灣</span>'
        );

      node.parentNode.replaceChild(span, node);
    }
  } else if (
    node.nodeType === 1 &&
    node.nodeName !== "SCRIPT" &&
    node.nodeName !== "STYLE"
  ) {
    // 元素節點，排除<script>和<style>
    for (const child of Array.from(node.childNodes)) {
      replaceText(child);
    }
  }
}

replaceText(document.body);
