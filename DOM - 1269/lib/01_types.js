const cast = (data) => {
  if (data === "true") {
    return true;
  }

  if (data === "false") {
    return false;
  }

  if ((data.match(/\d/g) || []).length === data.length) {
    return Number.parseInt(data, 10);
  }
  return data;
};

const dataset = (element) => {
  const openingTag = element.split('>')[0];
  const rawAttributes = openingTag.match(/data-\w+="\w+"/g) || [];
  const attributes = {};
  rawAttributes.forEach((attribute) => {
    console.log(attribute);
    const matchData = attribute.match(/data-(.+)="(.+)"/);
    attributes[matchData[1]] = cast(matchData[2]);
  });
  return attributes;
};

module.exports = dataset; // Do not remove.

console.log(dataset(`<div class="card" data-id="42" data-price="15" data-category="popular"
<div class="card-category">Popular</div>
<div class="card-description">
  <h2>The best burger in town (15€)</h2>
  div class="card" data-id="42" data-price="15" data-category="popular"
</div>
</div>`))
