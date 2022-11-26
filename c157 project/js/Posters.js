AFRAME.registerComponent("comics-posters", {
  init: function() {
    this.postersContainer = this.el;
    this.posters();
  },

  posters: function() {
    const postersRef = [
      {
        id: "mad max",
        url: "https://cdn.shopify.com/s/files/1/0969/9128/products/21_f8b6ce06-a276-4ee7-87f4-9a1e05db8a5c.jpg?v=1568967564 "
      },
      {
        id: "spider man",
        url: "https://i5.walmartimages.com/asr/1578c3d3-1af4-470d-a2b5-588040098468_1.f2fb6c1f24bbeac5fe116421bb6ccf82.jpeg "
      },

      {
        id: "venom",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSslX9QTItsEpuOR9sXYcnNmQwsnvX7aAieCA&usqp=CAU"
      },
      {
        id: "black adam",
        url: "https://media.forbiddenplanet.com/products/4d/5a/29ea7ca0d121011411f39d710d00d7d48267.jpg"
      }
    ];
    let prevoiusXPosition = -60;6
    for (var item of postersRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      const borderEl = this.createBorder(position, item.id);

      // Poster Element
      const poster = this.createPoster(item);
      borderEl.appendChild(poster);

      this.postersContainer.appendChild(borderEl);
    }
  },
  createBorder: function(position, id) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("id", id);
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 22,
      height: 40

      
    });

    entityEl.setAttribute("position", position);
    entityEl.setAttribute("material", { color: "#d76b30" });
    entityEl.setAttribute("cursor-listener", {});


    return entityEl;
  },
  createPoster: function(item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 20,
      height: 28
    });

    entityEl.setAttribute("position", { x: 0, y: 5, z: 0.1 });
    entityEl.setAttribute("material", { src: item.url });

    return entityEl;
  }
});
